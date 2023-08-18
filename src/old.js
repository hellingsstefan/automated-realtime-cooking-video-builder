/* Automatic video builder */
// The following script will merge all videos in the raw folder into one video
// Raw videos: A, B, C, ..., Z
// INTRO: 10 seconds of the last video (Z) in the raw folder
// END: Z - INTRO
// REVERSE: END + Y + X + ... + A
// REWIND: REVERSE sped up to untill it totals 10 seconds
// MAIN: A + B + C + ... + END
// Final video output: INTRO + REWIND + MAIN

import ffmpeg from 'fluent-ffmpeg';
import prompt from 'prompt-sync';
import fs from 'fs';
import { pathCheck, log } from './utils.js';

const FPS = 30;
const PATH_RAW = './videos/raw/';
const PATH_TEMP = './videos/temp/';
const NAME_OUTPUT = 'output.mp4';
const PATH_OUTPUT = `${PATH_TEMP}${NAME_OUTPUT}`;

const getClips = () => fs.readdirSync(PATH_RAW);
const clips = getClips();

function extractFrames() {
    // Export each frame of each clip as a .jpg into the temp folder
    // Name each frame as clipName-1.jpg, clipName-2.jpg, etc.
    // and log each exported frame
    clips.forEach((clip, index) => {
        const clipPath = `${PATH_RAW}${clip}`;
        const clipName = clip.split('.')[0];
        const clipFramesPath = `${PATH_TEMP}${clipName}/`;
        const clipFramesName = `${clipFramesPath}${clipName}-%d.jpg`;

        pathCheck(clipFramesPath);

        ffmpeg(clipPath)
            .on('start', () => log(`Exporting frames from ${clipName}...`))
            .on('progress', (progress) => log(`Exporting frame ${progress.frames} from ${clipName}...`))
            .on('end', () => log(`Exported frames from ${clipName}!`))
            .output(clipFramesName)
            .run();
    });
}

// Remove frames from directory at start or end of clip
function trim(clipName, frameNumber, position) {
    const clipFramesPath = `${PATH_TEMP}${clipName}/`;
    const clipFrames = fs.readdirSync(clipFramesPath);

    if (position === 'start') {
        clipFrames.forEach((frame, index) => {
            if (index < frameNumber) {
                fs.unlinkSync(`${clipFramesPath}${frame}`);
            }
        });
    }

    // Remove all frames from frameNumber to the end of the clip
    if (position === 'end') {
        clipFrames.forEach((frame, index) => {
            if (index >= frameNumber) {
                fs.unlinkSync(`${clipFramesPath}${frame}`);
            }
        });
    }
}

function trimStart() {
    const startClip = clips[0];
    const clipName = startClip.split('.')[0];
    const frameNumber = prompt("How many frames do you want to remove from the start? ");
    log(`Frames to remove from start: ${frameNumber}.`);

    trim(clipName, frameNumber, 'start');
}

function trimEnd() {
    const endClip = clips[clips.length - 1];
    const clipName = endClip.split('.')[0];
    const frameNumber = prompt("From what frame do you want to remove all the way to the end? ");
    log(`Frames to remove from end: ${frameNumber}.`);

    trim(clipName, frameNumber, 'end');
}

const framesIntro = getIntroFrames();
const framesMain = getMainFrames();
const framesReverse = getMainFrames().reverse();
const framesRewind = getRewindFrames();

function getIntroFrames() {
    const introClip = clips[clips.length - 1];
    const clipName = introClip.split('.')[0];
    const clipFramesPath = `${PATH_TEMP}${clipName}/`;
    const clipFrames = fs.readdirSync(clipFramesPath);

    return clipFrames;
}

function getMainFrames() {
    const mainFrames = [];

    clips.forEach((clip, index) => {
        const clipName = clip.split('.')[0];
        const clipFramesPath = `${PATH_TEMP}${clipName}/`;
        const clipFrames = fs.readdirSync(clipFramesPath);

        clipFrames.forEach((frame, index) => {
            mainFrames.push(`${clipFramesPath}${frame}`);
        });
    });

    return mainFrames;
}

// Get rewind frames, the total duration of the rewind should be 10 seconds
function getRewindFrames() {
    const rewindFrames = [];
    const rewindDuration = 10;
    const rewindFramesNumber = rewindDuration * FPS;
    const rewindSpeed = Math.floor(framesReverse.length / rewindFramesNumber);

    framesReverse.forEach((frame, index) => {
        if (index % rewindSpeed === 0) {
            rewindFrames.push(frame);
        }
    });

    return rewindFrames;
}

// Merge Scene
function mergeScene(sceneName, frames) {
    const sceneFramesPath = `${PATH_TEMP}${sceneName}/`;
    const sceneFramesName = `${sceneFramesPath}${sceneName}-%d.jpg`;
    const framesTotal = frames.length;

    pathCheck(sceneFramesPath);

    const extractedFramesPath = PATH_TEMP + frames[0].split('-')[0] + '/';
    const scenePath = `${PATH_TEMP}${sceneName}/`;

    frames.forEach((frame, index) => {
        const frameNumber = index + 1;
        const frameName = `intro-${frameNumber}.jpg`;

        fs.copyFileSync(extractedFramesPath + frame, `${scenePath}${frameName}`)
    });

    ffmpeg(sceneFramesName)
        .on('start', () => log(`Merging ${sceneName} frames...`))
        .on('progress', (progress) => log(`Merging "${sceneName}". Frame ${progress.frames} of ${framesTotal} merged.`))
        .on('end', () => log(`Merged ${sceneName} frames!`))
        .output(`${PATH_TEMP}${sceneName}.mp4`)
        .run();
}

// Merge output
function mergeOutput() {
    const framesTotal = framesIntro.length + framesRewind.length + framesMain.length;

    ffmpeg()
        .on('start', () => log(`Merging output...`))
        .on('progress', (progress) => log(`Merging output... ${progress.frames} of ${framesTotal} frames merged.`))
        .on('end', () => log(`Merged output!`))
        .input(`${PATH_TEMP}intro.mp4`)
        .input(`${PATH_TEMP}rewind.mp4`)
        .input(`${PATH_TEMP}main.mp4`)
        .output(`${PATH_TEMP}output.mp4`)
        .run();
}

// extractFrames();
// trimStart();
// trimEnd();
mergeScene('intro', framesIntro);
// mergeScene('rewind', framesRewind);
// mergeScene('main', framesMain);
// mergeOutput();
// cleanup();
