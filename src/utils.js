import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

export const getVideos = path => fs.readdirSync(path);

export const pathCheck = path => {
    if (!fs.existsSync(path))
        fs.mkdirSync(path);
}

export const log = message => {
    console.log(`\x1b[32m[LOG]\x1b[0m ${message}`);
}

export const getVideoMeta = async (video) => new Promise((resolve, reject) => {
    ffmpeg.ffprobe(video, (err, metadata) => {
        if (err) {
            reject(err);
        } else {
            resolve(metadata);
        }
    });
});

export const getDurationInSec = async (video) => {
    const metadata = await getVideoMeta(video);

    return metadata.format.duration;
};

export const getAllDurations = async (videos) => {
    const durations = [];

    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const duration = await getDurationInSec(video);
        durations.push(duration);
    }

    return durations;
};

// Format time in seconds to hh:mm:ss.xxx
// Eg: 1171.472 seconds is 19:31.472
export const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
    const milliseconds = Math.floor((time - Math.floor(time)) * 1000);

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
