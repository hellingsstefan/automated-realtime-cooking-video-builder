/*
ffmpeg progress object has the following properties:
frames: total processed frame count
currentFps: framerate at which FFmpeg is currently processing
currentKbps: throughput at which FFmpeg is currently processing
targetSize: current size of the target file in kilobytes
timemark: the timestamp of the current frame in seconds
percent: an estimation of the progress percentage

ffmpeg prototype has the following methods:
_checkCapabilities
_forgetPaths
_getArguments
_getFfmpegPath
_getFfprobePath
_getFlvtoolPath
_prepare
_spawnFfmpeg
addInput
addInputOption
addInputOptions
addOption
addOptions
addOutput
addOutputOption
addOutputOptions
applyAutopad
applyAutoPad
applyAutopadding
applyAutoPadding
aspect
aspectRatio
audioBitrate
audioChannels
audioCodec
audioFilter
audioFilters
audioFrequency
audioQuality
autopad
autoPad
availableCodecs
availableEncoders
availableFilters
availableFormats
clone
complexFilter
concat
concatenate
duration
exec
execute
ffprobe
filterGraph
flvmeta
format
fps
FPS
fpsInput
FPSInput
fpsOutput
FPSOutput
frames
fromFormat
getAvailableCodecs
getAvailableEncoders
getAvailableFilters
getAvailableFormats
input
inputFormat
inputFps
inputFPS
inputOption
inputOptions
keepDAR
keepDisplayAspect
keepDisplayAspectRatio
keepPixelAspect
kill
loop
map
mergeAdd
mergeToFile
native
nativeFramerate
noAudio
noVideo
output
outputFormat
outputFps
outputFPS
outputOption
outputOptions
pipe
preset
renice
run
save
saveToFile
screenshot
screenshots
seek
seekInput
seekOutput
setAspect
setAspectRatio
setDuration
setFfmpegPath
setFfprobePath
setFlvtoolPath
setSize
setStartTime
size
stream
takeFrames
takeScreenshots
thumbnail
thumbnails
toFormat
updateFlvMetadata
usingPreset
videoBitrate
videoCodec
videoFilter
videoFilters
withAspect
withAspectRatio
withAudioBitrate
withAudioChannels
withAudioCodec
withAudioFilter
withAudioFilters
withAudioFrequency
withAudioQuality
withAutopad
withAutoPad
withAutopadding
withAutoPadding
withDuration
withFps
withFPS
withFpsInput
withFPSInput
withFpsOutput
withFPSOutput
withFrames
withInputFormat
withInputFps
withInputFPS
withInputOption
withInputOptions
withNativeFramerate
withNoAudio
withNoVideo
withOption
withOptions
withOutputFormat
withOutputFps
withOutputFPS
withOutputOption
withOutputOptions
withSize
withVideoBitrate
withVideoCodec
withVideoFilter
withVideoFilters
writeToStream


Available ffmpeg filters:
┌────────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────┬─────────┬────────────────┬─────────┬─────────────────┐
│      (index)       │                                             description                                              │  input  │ multipleInputs │ output  │ multipleOutputs │
├────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────┼────────────────┼─────────┼─────────────────┤
│       abench       │                                  'Benchmark part of a filtergraph.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│    acompressor     │                                         'Audio compressor.'                                          │ 'audio' │     false      │ 'audio' │      false      │
│     acontrast      │                      'Simple audio dynamic range compression/expansion filter.'                      │ 'audio' │     false      │ 'audio' │      false      │
│       acopy        │                           'Copy the input audio unchanged to the output.'                            │ 'audio' │     false      │ 'audio' │      false      │
│        acue        │                                  'Delay filtering to match a cue.'                                   │ 'audio' │     false      │ 'audio' │      false      │
│     acrossfade     │                                'Cross fade two input audio streams.'                                 │ 'audio' │      true      │ 'audio' │      false      │
│      acrusher      │                                    'Reduce audio bit resolution.'                                    │ 'audio' │     false      │ 'audio' │      false      │
│      adeclick      │                              'Remove impulsive noise from input audio.'                              │ 'audio' │     false      │ 'audio' │      false      │
│      adeclip       │                                 'Remove clipping from input audio.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│    adecorrelate    │                                'Apply decorrelation to input audio.'                                 │ 'audio' │     false      │ 'audio' │      false      │
│       adelay       │                                 'Delay one or more audio channels.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│      adenorm       │                       'Remedy denormals by adding extremely low-level noise.'                        │ 'audio' │     false      │ 'audio' │      false      │
│    aderivative     │                                 'Compute derivative of input audio.'                                 │ 'audio' │     false      │ 'audio' │      false      │
│ adynamicequalizer  │                             'Apply Dynamic Equalization of input audio.'                             │ 'audio' │     false      │ 'audio' │      false      │
│   adynamicsmooth   │                              'Apply Dynamic Smoothing of input audio.'                               │ 'audio' │     false      │ 'audio' │      false      │
│       aecho        │                                     'Add echoing to the audio.'                                      │ 'audio' │     false      │ 'audio' │      false      │
│     aemphasis      │                                          'Audio emphasis.'                                           │ 'audio' │     false      │ 'audio' │      false      │
│       aeval        │                      'Filter audio signal according to a specified expression.'                      │ 'audio' │     false      │ 'audio' │      false      │
│      aexciter      │                               'Enhance high frequency part of audio.'                                │ 'audio' │     false      │ 'audio' │      false      │
│       afade        │                                      'Fade in/out input audio.'                                      │ 'audio' │     false      │ 'audio' │      false      │
│       afftdn       │                                  'Denoise audio samples using FFT.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│      afftfilt      │                    'Apply arbitrary expressions to samples in frequency domain.'                     │ 'audio' │     false      │ 'audio' │      false      │
│      aformat       │                      'Convert the input audio to one of the specified formats.'                      │ 'audio' │     false      │ 'audio' │      false      │
│     afreqshift     │                              'Apply frequency shifting to input audio.'                              │ 'audio' │     false      │ 'audio' │      false      │
│       afwtdn       │                                'Denoise audio stream using Wavelets.'                                │ 'audio' │     false      │ 'audio' │      false      │
│       agate        │                                            'Audio gate.'                                             │ 'audio' │     false      │ 'audio' │      false      │
│     aintegral      │                                  'Compute integral of input audio.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│      alatency      │                                  'Report audio filtering latency.'                                   │ 'audio' │     false      │ 'audio' │      false      │
│      alimiter      │                                      'Audio lookahead limiter.'                                      │ 'audio' │     false      │ 'audio' │      false      │
│      allpass       │                                 'Apply a two-pole all-pass filter.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│       aloop        │                                        'Loop audio samples.'                                         │ 'audio' │     false      │ 'audio' │      false      │
│     ametadata      │                                  'Manipulate audio frame metadata.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│     amultiply      │                                    'Multiply two audio streams.'                                     │ 'audio' │      true      │ 'audio' │      false      │
│       anlmdn       │                     'Reduce broadband noise from stream using Non-Local Means.'                      │ 'audio' │     false      │ 'audio' │      false      │
│       anlmf        │                'Apply Normalized Least-Mean-Fourth algorithm to first audio stream.'                 │ 'audio' │      true      │ 'audio' │      false      │
│       anlms        │                'Apply Normalized Least-Mean-Squares algorithm to first audio stream.'                │ 'audio' │      true      │ 'audio' │      false      │
│       anull        │                              'Pass the source unchanged to the output.'                              │ 'audio' │     false      │ 'audio' │      false      │
│        apad        │                                      'Pad audio with silence.'                                       │ 'audio' │     false      │ 'audio' │      false      │
│       aperms       │                            'Set permissions for the output audio frame.'                             │ 'audio' │     false      │ 'audio' │      false      │
│      aphaser       │                                 'Add a phasing effect to the audio.'                                 │ 'audio' │     false      │ 'audio' │      false      │
│    aphaseshift     │                                'Apply phase shifting to input audio.'                                │ 'audio' │     false      │ 'audio' │      false      │
│      apsyclip      │                                   'Audio Psychoacoustic Clipper.'                                    │ 'audio' │     false      │ 'audio' │      false      │
│     apulsator      │                                          'Audio pulsator.'                                           │ 'audio' │     false      │ 'audio' │      false      │
│     arealtime      │                               'Slow down filtering to match realtime.'                               │ 'audio' │     false      │ 'audio' │      false      │
│     aresample      │                                        'Resample audio data.'                                        │ 'audio' │     false      │ 'audio' │      false      │
│      areverse      │                                       'Reverse an audio clip.'                                       │ 'audio' │     false      │ 'audio' │      false      │
│       arnndn       │                     'Reduce noise from speech using Recurrent Neural Networks.'                      │ 'audio' │     false      │ 'audio' │      false      │
│        asdr        │                             'Measure Audio Signal-to-Distortion Ratio.'                              │ 'audio' │      true      │ 'audio' │      false      │
│      asendcmd      │                                     'Send commands to filters.'                                      │ 'audio' │     false      │ 'audio' │      false      │
│    asetnsamples    │                      'Set the number of samples for each output audio frames.'                       │ 'audio' │     false      │ 'audio' │      false      │
│      asetpts       │                                'Set PTS for the output audio frame.'                                 │ 'audio' │     false      │ 'audio' │      false      │
│      asetrate      │                         'Change the sample rate without altering the data.'                          │ 'audio' │     false      │ 'audio' │      false      │
│       asettb       │                              'Set timebase for the audio output link.'                               │ 'audio' │     false      │ 'audio' │      false      │
│     ashowinfo      │                           'Show textual information for each audio frame.'                           │ 'audio' │     false      │ 'audio' │      false      │
│     asidedata      │                                 'Manipulate audio frame side data.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│     asoftclip      │                                        'Audio Soft Clipper.'                                         │ 'audio' │     false      │ 'audio' │      false      │
│   aspectralstats   │                        'Show frequency domain statistics about audio frames.'                        │ 'audio' │     false      │ 'audio' │      false      │
│       astats       │                          'Show time domain statistics about audio frames.'                           │ 'audio' │     false      │ 'audio' │      false      │
│     asubboost      │                                    'Boost subwoofer frequencies.'                                    │ 'audio' │     false      │ 'audio' │      false      │
│      asubcut       │                                     'Cut subwoofer frequencies.'                                     │ 'audio' │     false      │ 'audio' │      false      │
│     asupercut      │                                       'Cut super frequencies.'                                       │ 'audio' │     false      │ 'audio' │      false      │
│     asuperpass     │                           'Apply high order Butterworth band-pass filter.'                           │ 'audio' │     false      │ 'audio' │      false      │
│     asuperstop     │                           'Apply high order Butterworth band-stop filter.'                           │ 'audio' │     false      │ 'audio' │      false      │
│       atempo       │                                        'Adjust audio tempo.'                                         │ 'audio' │     false      │ 'audio' │      false      │
│       atilt        │                                   'Apply spectral tilt to audio.'                                    │ 'audio' │     false      │ 'audio' │      false      │
│       atrim        │                     'Pick one continuous section from the input, drop the rest.'                     │ 'audio' │     false      │ 'audio' │      false      │
│    axcorrelate     │                                 'Cross-correlate two audio streams.'                                 │ 'audio' │      true      │ 'audio' │      false      │
│        azmq        │                      'Receive commands through ZMQ and broker them to filters.'                      │ 'audio' │     false      │ 'audio' │      false      │
│      bandpass      │                           'Apply a two-pole Butterworth band-pass filter.'                           │ 'audio' │     false      │ 'audio' │      false      │
│     bandreject     │                          'Apply a two-pole Butterworth band-reject filter.'                          │ 'audio' │     false      │ 'audio' │      false      │
│        bass        │                                  'Boost or cut lower frequencies.'                                   │ 'audio' │     false      │ 'audio' │      false      │
│       biquad       │                       'Apply a biquad IIR filter with the given coefficients.'                       │ 'audio' │     false      │ 'audio' │      false      │
│     channelmap     │                                       'Remap audio channels.'                                        │ 'audio' │     false      │ 'audio' │      false      │
│       chorus       │                                 'Add a chorus effect to the audio.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│      compand       │                              'Compress or expand audio dynamic range.'                               │ 'audio' │     false      │ 'audio' │      false      │
│ compensationdelay  │                                   'Audio Compensation Delay Line.'                                   │ 'audio' │     false      │ 'audio' │      false      │
│     crossfeed      │                                 'Apply headphone crossfeed filter.'                                  │ 'audio' │     false      │ 'audio' │      false      │
│    crystalizer     │                               'Simple audio noise sharpening filter.'                                │ 'audio' │     false      │ 'audio' │      false      │
│      dcshift       │                                   'Apply a DC shift to the audio.'                                   │ 'audio' │     false      │ 'audio' │      false      │
│      deesser       │                                   'Apply de-essing to the audio.'                                    │ 'audio' │     false      │ 'audio' │      false      │
│   dialoguenhance   │                                    'Audio Dialogue Enhancement.'                                     │ 'audio' │     false      │ 'audio' │      false      │
│      drmeter       │                                    'Measure audio dynamic range.'                                    │ 'audio' │     false      │ 'audio' │      false      │
│     dynaudnorm     │                                     'Dynamic Audio Normalizer.'                                      │ 'audio' │     false      │ 'audio' │      false      │
│       earwax       │                                      'Widen the stereo image.'                                       │ 'audio' │     false      │ 'audio' │      false      │
│     equalizer      │                          'Apply two-pole peaking equalization (EQ) filter.'                          │ 'audio' │     false      │ 'audio' │      false      │
│    extrastereo     │                         'Increase difference between stereo audio channels.'                         │ 'audio' │     false      │ 'audio' │      false      │
│    firequalizer    │                                 'Finite Impulse Response Equalizer.'                                 │ 'audio' │     false      │ 'audio' │      false      │
│      flanger       │                               'Apply a flanging effect to the audio.'                                │ 'audio' │     false      │ 'audio' │      false      │
│        haas        │                                    'Apply Haas Stereo Enhancer.'                                     │ 'audio' │     false      │ 'audio' │      false      │
│        hdcd        │                     'Apply High Definition Compatible Digital (HDCD) decoding.'                      │ 'audio' │     false      │ 'audio' │      false      │
│      highpass      │                         'Apply a high-pass filter with 3dB point frequency.'                         │ 'audio' │     false      │ 'audio' │      false      │
│     highshelf      │                                     'Apply a high shelf filter.'                                     │ 'audio' │     false      │ 'audio' │      false      │
│      loudnorm      │                                  'EBU R128 loudness normalization'                                   │ 'audio' │     false      │ 'audio' │      false      │
│      lowpass       │                         'Apply a low-pass filter with 3dB point frequency.'                          │ 'audio' │     false      │ 'audio' │      false      │
│      lowshelf      │                                     'Apply a low shelf filter.'                                      │ 'audio' │     false      │ 'audio' │      false      │
│      mcompand      │                         'Multiband Compress or expand audio dynamic range.'                          │ 'audio' │     false      │ 'audio' │      false      │
│        pan         │                            'Remix channels with coefficients (panning).'                             │ 'audio' │     false      │ 'audio' │      false      │
│     replaygain     │                                        'ReplayGain scanner.'                                         │ 'audio' │     false      │ 'audio' │      false      │
│     rubberband     │                             'Apply time-stretching and pitch-shifting.'                              │ 'audio' │     false      │ 'audio' │      false      │
│ sidechaincompress  │                                       'Sidechain compressor.'                                        │ 'audio' │      true      │ 'audio' │      false      │
│   sidechaingate    │                                       'Audio sidechain gate.'                                        │ 'audio' │      true      │ 'audio' │      false      │
│   silencedetect    │                                          'Detect silence.'                                           │ 'audio' │     false      │ 'audio' │      false      │
│   silenceremove    │                                          'Remove silence.'                                           │ 'audio' │     false      │ 'audio' │      false      │
│     speechnorm     │                                         'Speech Normalizer.'                                         │ 'audio' │     false      │ 'audio' │      false      │
│    stereotools     │                                    'Apply various stereo tools.'                                     │ 'audio' │     false      │ 'audio' │      false      │
│    stereowiden     │                                   'Apply stereo widening effect.'                                    │ 'audio' │     false      │ 'audio' │      false      │
│   superequalizer   │                                 'Apply 18 band equalization filter.'                                 │ 'audio' │     false      │ 'audio' │      false      │
│      surround      │                                 'Apply audio surround upmix filter.'                                 │ 'audio' │     false      │ 'audio' │      false      │
│     tiltshelf      │                                     'Apply a tilt shelf filter.'                                     │ 'audio' │     false      │ 'audio' │      false      │
│       treble       │                                  'Boost or cut upper frequencies.'                                   │ 'audio' │     false      │ 'audio' │      false      │
│      tremolo       │                                       'Apply tremolo effect.'                                        │ 'audio' │     false      │ 'audio' │      false      │
│      vibrato       │                                       'Apply vibrato effect.'                                        │ 'audio' │     false      │ 'audio' │      false      │
│    virtualbass     │                                        'Audio Virtual Bass.'                                         │ 'audio' │     false      │ 'audio' │      false      │
│       volume       │                                        'Change input volume.'                                        │ 'audio' │     false      │ 'audio' │      false      │
│    volumedetect    │                                        'Detect audio volume.'                                        │ 'audio' │     false      │ 'audio' │      false      │
│      aevalsrc      │                        'Generate an audio signal generated by an expression.'                        │ 'none'  │     false      │ 'audio' │      false      │
│      afirsrc       │                             'Generate a FIR coefficients audio stream.'                              │ 'none'  │     false      │ 'audio' │      false      │
│     anoisesrc      │                                   'Generate a noise audio signal.'                                   │ 'none'  │     false      │ 'audio' │      false      │
│      anullsrc      │                           'Null audio source, return empty audio frames.'                            │ 'none'  │     false      │ 'audio' │      false      │
│      hilbert       │                           'Generate a Hilbert transform FIR coefficients.'                           │ 'none'  │     false      │ 'audio' │      false      │
│        sinc        │  'Generate a sinc kaiser-windowed low-pass, high-pass, band-pass, or band-reject FIR coefficients.'  │ 'none'  │     false      │ 'audio' │      false      │
│        sine        │                                  'Generate sine wave audio signal.'                                  │ 'none'  │     false      │ 'audio' │      false      │
│     anullsink      │                            'Do absolutely nothing with the input audio.'                             │ 'audio' │     false      │ 'none'  │      false      │
│       addroi       │                                  'Add region of interest to frame.'                                  │ 'video' │     false      │ 'video' │      false      │
│    alphaextract    │                      'Extract an alpha channel as a grayscale image component.'                      │ 'video' │     false      │ 'video' │      false      │
│     alphamerge     │         'Copy the luma value of the second input into the alpha channel of the first input.'         │ 'video' │      true      │ 'video' │      false      │
│      amplify       │                          'Amplify changes between successive video frames.'                          │ 'video' │     false      │ 'video' │      false      │
│        ass         │                  'Render ASS subtitles onto input video using the libass library.'                   │ 'video' │     false      │ 'video' │      false      │
│     atadenoise     │                           'Apply an Adaptive Temporal Averaging Denoiser.'                           │ 'video' │     false      │ 'video' │      false      │
│      avgblur       │                                     'Apply Average Blur filter.'                                     │ 'video' │     false      │ 'video' │      false      │
│        bbox        │                                'Compute bounding box for each frame.'                                │ 'video' │     false      │ 'video' │      false      │
│       bench        │                                  'Benchmark part of a filtergraph.'                                  │ 'video' │     false      │ 'video' │      false      │
│     bilateral      │                                      'Apply Bilateral filter.'                                       │ 'video' │     false      │ 'video' │      false      │
│   bitplanenoise    │                                      'Measure bit plane noise.'                                      │ 'video' │     false      │ 'video' │      false      │
│    blackdetect     │                          'Detect video intervals that are (almost) black.'                           │ 'video' │     false      │ 'video' │      false      │
│     blackframe     │                               'Detect frames that are (almost) black.'                               │ 'video' │     false      │ 'video' │      false      │
│       blend        │                              'Blend two video frames into each other.'                               │ 'video' │      true      │ 'video' │      false      │
│    blockdetect     │                                        'Blockdetect filter.'                                         │ 'video' │     false      │ 'video' │      false      │
│     blurdetect     │                                         'Blurdetect filter.'                                         │ 'video' │     false      │ 'video' │      false      │
│      boxblur       │                                          'Blur the input.'                                           │ 'video' │     false      │ 'video' │      false      │
│       bwdif        │                                    'Deinterlace the input image.'                                    │ 'video' │     false      │ 'video' │      false      │
│        cas         │                                     'Contrast Adaptive Sharpen.'                                     │ 'video' │     false      │ 'video' │      false      │
│     chromahold     │                               'Turns a certain color range into gray.'                               │ 'video' │     false      │ 'video' │      false      │
│     chromakey      │                  'Turns a certain color into transparency. Operates on YUV colors.'                  │ 'video' │     false      │ 'video' │      false      │
│      chromanr      │                                     'Reduce chrominance noise.'                                      │ 'video' │     false      │ 'video' │      false      │
│    chromashift     │                                           'Shift chroma.'                                            │ 'video' │     false      │ 'video' │      false      │
│      ciescope      │                                          'Video CIE scope.'                                          │ 'video' │     false      │ 'video' │      false      │
│     codecview      │                              'Visualize information about some codecs.'                              │ 'video' │     false      │ 'video' │      false      │
│    colorbalance    │                                     'Adjust the color balance.'                                      │ 'video' │     false      │ 'video' │      false      │
│ colorchannelmixer  │                              'Adjust colors by mixing color channels.'                               │ 'video' │     false      │ 'video' │      false      │
│   colorcontrast    │                           'Adjust color contrast between RGB components.'                            │ 'video' │     false      │ 'video' │      false      │
│    colorcorrect    │                   'Adjust color white balance selectively for blacks and whites.'                    │ 'video' │     false      │ 'video' │      false      │
│      colorize      │                             'Overlay a solid color on the video stream.'                             │ 'video' │     false      │ 'video' │      false      │
│      colorkey      │                  'Turns a certain color into transparency. Operates on RGB colors.'                  │ 'video' │     false      │ 'video' │      false      │
│     colorhold      │                   'Turns a certain color range into gray. Operates on RGB colors.'                   │ 'video' │     false      │ 'video' │      false      │
│    colorlevels     │                                      'Adjust the color levels.'                                      │ 'video' │     false      │ 'video' │      false      │
│    colormatrix     │                                       'Convert color matrix.'                                        │ 'video' │     false      │ 'video' │      false      │
│     colorspace     │                                    'Convert between colorspaces.'                                    │ 'video' │     false      │ 'video' │      false      │
│  colortemperature  │                                 'Adjust color temperature of video.'                                 │ 'video' │     false      │ 'video' │      false      │
│    convolution     │                                     'Apply convolution filter.'                                      │ 'video' │     false      │ 'video' │      false      │
│      convolve      │                       'Convolve first video stream with second video stream.'                        │ 'video' │      true      │ 'video' │      false      │
│        copy        │                           'Copy the input video unchanged to the output.'                            │ 'video' │     false      │ 'video' │      false      │
│     coreimage      │                                'Video filtering using CoreImage API.'                                │ 'video' │     false      │ 'video' │      false      │
│     cover_rect     │                              'Find and cover a user specified object.'                               │ 'video' │     false      │ 'video' │      false      │
│        crop        │                                       'Crop the input video.'                                        │ 'video' │     false      │ 'video' │      false      │
│     cropdetect     │                                       'Auto-detect crop size.'                                       │ 'video' │     false      │ 'video' │      false      │
│        cue         │                                  'Delay filtering to match a cue.'                                   │ 'video' │     false      │ 'video' │      false      │
│       curves       │                                     'Adjust components curves.'                                      │ 'video' │     false      │ 'video' │      false      │
│     datascope      │                                        'Video data analysis.'                                        │ 'video' │     false      │ 'video' │      false      │
│       dblur        │                                   'Apply Directional Blur filter.'                                   │ 'video' │     false      │ 'video' │      false      │
│      dctdnoiz      │                                    'Denoise frames using 2D DCT.'                                    │ 'video' │     false      │ 'video' │      false      │
│       deband       │                                           'Debands video.'                                           │ 'video' │     false      │ 'video' │      false      │
│      deblock       │                                           'Deblock video.'                                           │ 'video' │     false      │ 'video' │      false      │
│     deconvolve     │                      'Deconvolve first video stream with second video stream.'                       │ 'video' │      true      │ 'video' │      false      │
│       dedot        │                              'Reduce cross-luminance and cross-color.'                               │ 'video' │     false      │ 'video' │      false      │
│      deflate       │                                       'Apply deflate effect.'                                        │ 'video' │     false      │ 'video' │      false      │
│     deflicker      │                            'Remove temporal frame luminance variations.'                             │ 'video' │     false      │ 'video' │      false      │
│      dejudder      │                                 'Remove judder produced by pullup.'                                  │ 'video' │     false      │ 'video' │      false      │
│       delogo       │                                   'Remove logo from input video.'                                    │ 'video' │     false      │ 'video' │      false      │
│       derain       │                                 'Apply derain filter to the input.'                                  │ 'video' │     false      │ 'video' │      false      │
│      deshake       │                                       'Stabilize shaky video.'                                       │ 'video' │     false      │ 'video' │      false      │
│      despill       │                                           'Despill video.'                                           │ 'video' │     false      │ 'video' │      false      │
│     detelecine     │                                 'Apply an inverse telecine pattern.'                                 │ 'video' │     false      │ 'video' │      false      │
│      dilation      │                                       'Apply dilation effect.'                                       │ 'video' │     false      │ 'video' │      false      │
│    dnn_classify    │                              'Apply DNN classify filter to the input.'                               │ 'video' │     false      │ 'video' │      false      │
│     dnn_detect     │                               'Apply DNN detect filter to the input.'                                │ 'video' │     false      │ 'video' │      false      │
│   dnn_processing   │                             'Apply DNN processing filter to the input.'                              │ 'video' │     false      │ 'video' │      false      │
│    doubleweave     │                       'Weave input video fields into double number of frames.'                       │ 'video' │     false      │ 'video' │      false      │
│      drawbox       │                               'Draw a colored box on the input video.'                               │ 'video' │     false      │ 'video' │      false      │
│     drawgraph      │                              'Draw a graph using input video metadata.'                              │ 'video' │     false      │ 'video' │      false      │
│      drawgrid      │                              'Draw a colored grid on the input video.'                               │ 'video' │     false      │ 'video' │      false      │
│      drawtext      │                    'Draw text on top of video frames using libfreetype library.'                     │ 'video' │     false      │ 'video' │      false      │
│     edgedetect     │                                       'Detect and draw edge.'                                        │ 'video' │     false      │ 'video' │      false      │
│        elbg        │                         'Apply posterize effect, using the ELBG algorithm.'                          │ 'video' │     false      │ 'video' │      false      │
│      entropy       │                                   'Measure video frames entropy.'                                    │ 'video' │     false      │ 'video' │      false      │
│        epx         │                                'Scale the input using EPX algorithm.'                                │ 'video' │     false      │ 'video' │      false      │
│         eq         │                        'Adjust brightness, contrast, gamma, and saturation.'                         │ 'video' │     false      │ 'video' │      false      │
│      erosion       │                                       'Apply erosion effect.'                                        │ 'video' │     false      │ 'video' │      false      │
│       estdif       │                               'Apply Edge Slope Tracing deinterlace.'                                │ 'video' │     false      │ 'video' │      false      │
│      exposure      │                                'Adjust exposure of the video stream.'                                │ 'video' │     false      │ 'video' │      false      │
│        fade        │                                      'Fade in/out input video.'                                      │ 'video' │     false      │ 'video' │      false      │
│      feedback      │                                    'Apply feedback video filter.'                                    │ 'video' │      true      │ 'video' │      true       │
│      fftdnoiz      │                                    'Denoise frames using 3D FFT.'                                    │ 'video' │     false      │ 'video' │      false      │
│      fftfilt       │                     'Apply arbitrary expressions to pixels in frequency domain.'                     │ 'video' │     false      │ 'video' │      false      │
│       field        │                               'Extract a field from the input video.'                                │ 'video' │     false      │ 'video' │      false      │
│     fieldhint      │                                    'Field matching using hints.'                                     │ 'video' │     false      │ 'video' │      false      │
│     fieldorder     │                                        'Set the field order.'                                        │ 'video' │     false      │ 'video' │      false      │
│    fillborders     │                                  'Fill borders of the input video.'                                  │ 'video' │     false      │ 'video' │      false      │
│     find_rect      │                                   'Find a user specified object.'                                    │ 'video' │     false      │ 'video' │      false      │
│     floodfill      │                           'Fill area with same color with another color.'                            │ 'video' │     false      │ 'video' │      false      │
│       format       │                   'Convert the input video to one of the specified pixel formats.'                   │ 'video' │     false      │ 'video' │      false      │
│        fps         │                                     'Force constant framerate.'                                      │ 'video' │     false      │ 'video' │      false      │
│     framepack      │                            'Generate a frame packed stereoscopic video.'                             │ 'video' │      true      │ 'video' │      false      │
│     framerate      │             'Upsamples or downsamples progressive source between specified frame rates.'             │ 'video' │     false      │ 'video' │      false      │
│     framestep      │                                  'Select one frame every N frames.'                                  │ 'video' │     false      │ 'video' │      false      │
│    freezedetect    │                                    'Detects frozen video input.'                                     │ 'video' │     false      │ 'video' │      false      │
│    freezeframes    │                                        'Freeze video frames.'                                        │ 'video' │      true      │ 'video' │      false      │
│       frei0r       │                                       'Apply a frei0r effect.'                                       │ 'video' │     false      │ 'video' │      false      │
│        fspp        │                             'Apply Fast Simple Post-processing filter.'                              │ 'video' │     false      │ 'video' │      false      │
│       gblur        │                                    'Apply Gaussian Blur filter.'                                     │ 'video' │     false      │ 'video' │      false      │
│        geq         │                               'Apply generic equation to each pixel.'                                │ 'video' │     false      │ 'video' │      false      │
│      gradfun       │                               'Debands video quickly using gradients.'                               │ 'video' │     false      │ 'video' │      false      │
│    graphmonitor    │                                  'Show various filtergraph stats.'                                   │ 'video' │     false      │ 'video' │      false      │
│     grayworld      │                        'Adjust white balance using LAB gray world algorithm'                         │ 'video' │     false      │ 'video' │      false      │
│      greyedge      │                       'Estimates scene illumination by grey edge assumption.'                        │ 'video' │     false      │ 'video' │      false      │
│      haldclut      │                                  'Adjust colors using a Hald CLUT.'                                  │ 'video' │      true      │ 'video' │      false      │
│       hflip        │                                 'Horizontally flip the input video.'                                 │ 'video' │     false      │ 'video' │      false      │
│       histeq       │                             'Apply global color histogram equalization.'                             │ 'video' │     false      │ 'video' │      false      │
│     histogram      │                                   'Compute and draw a histogram.'                                    │ 'video' │     false      │ 'video' │      false      │
│       hqdn3d       │                                 'Apply a High Quality 3D Denoiser.'                                  │ 'video' │     false      │ 'video' │      false      │
│        hqx         │                'Scale the input by 2, 3 or 4 using the hq*x magnification algorithm.'                │ 'video' │     false      │ 'video' │      false      │
│      hsvhold       │                                'Turns a certain HSV range into gray.'                                │ 'video' │     false      │ 'video' │      false      │
│       hsvkey       │                'Turns a certain HSV range into transparency. Operates on YUV colors.'                │ 'video' │     false      │ 'video' │      false      │
│        hue         │                         'Adjust the hue and saturation of the input video.'                          │ 'video' │     false      │ 'video' │      false      │
│   huesaturation    │                            'Apply hue-saturation-intensity adjustments.'                             │ 'video' │     false      │ 'video' │      false      │
│     hwdownload     │                            'Download a hardware frame to a normal frame'                             │ 'video' │     false      │ 'video' │      false      │
│       hwmap        │                                        'Map hardware frames'                                         │ 'video' │     false      │ 'video' │      false      │
│      hwupload      │                             'Upload a normal frame to a hardware frame'                              │ 'video' │     false      │ 'video' │      false      │
│     hysteresis     │                   'Grow first stream into second stream by connecting components.'                   │ 'video' │      true      │ 'video' │      false      │
│      identity      │                         'Calculate the Identity between two video streams.'                          │ 'video' │      true      │ 'video' │      false      │
│        idet        │                                      'Interlace detect Filter.'                                      │ 'video' │     false      │ 'video' │      false      │
│         il         │                                 'Deinterleave or interleave fields.'                                 │ 'video' │     false      │ 'video' │      false      │
│      inflate       │                                       'Apply inflate effect.'                                        │ 'video' │     false      │ 'video' │      false      │
│     interlace      │                             'Convert progressive video into interlaced.'                             │ 'video' │     false      │ 'video' │      false      │
│     kerndeint      │                              'Apply kernel deinterlacing to the input.'                              │ 'video' │     false      │ 'video' │      false      │
│       kirsch       │                                       'Apply kirsch operator.'                                       │ 'video' │     false      │ 'video' │      false      │
│       lagfun       │                                    'Slowly update darker pixels.'                                    │ 'video' │     false      │ 'video' │      false      │
│      latency       │                                  'Report video filtering latency.'                                   │ 'video' │     false      │ 'video' │      false      │
│   lenscorrection   │                        'Rectify the image by correcting for lens distortion.'                        │ 'video' │     false      │ 'video' │      false      │
│      libvmaf       │                           'Calculate the VMAF between two video streams.'                            │ 'video' │      true      │ 'video' │      false      │
│      limiter       │                          'Limit pixels components to the specified range.'                           │ 'video' │     false      │ 'video' │      false      │
│        loop        │                                         'Loop video frames.'                                         │ 'video' │     false      │ 'video' │      false      │
│      lumakey       │                              'Turns a certain luma into transparency.'                               │ 'video' │     false      │ 'video' │      false      │
│        lut         │                    'Compute and apply a lookup table to the RGB/YUV input video.'                    │ 'video' │     false      │ 'video' │      false      │
│       lut1d        │                                   'Adjust colors using a 1D LUT.'                                    │ 'video' │     false      │ 'video' │      false      │
│        lut2        │                      'Compute and apply a lookup table from two video inputs.'                       │ 'video' │      true      │ 'video' │      false      │
│       lut3d        │                                   'Adjust colors using a 3D LUT.'                                    │ 'video' │     false      │ 'video' │      false      │
│       lutrgb       │                      'Compute and apply a lookup table to the RGB input video.'                      │ 'video' │     false      │ 'video' │      false      │
│       lutyuv       │                      'Compute and apply a lookup table to the YUV input video.'                      │ 'video' │     false      │ 'video' │      false      │
│  maskedthreshold   │              'Pick pixels comparing absolute difference of two streams with threshold.'              │ 'video' │      true      │ 'video' │      false      │
│      maskfun       │                                            'Create Mask.'                                            │ 'video' │     false      │ 'video' │      false      │
│       median       │                                        'Apply Median filter.'                                        │ 'video' │     false      │ 'video' │      false      │
│     mestimate      │                                      'Generate motion vectors.'                                      │ 'video' │     false      │ 'video' │      false      │
│      metadata      │                                  'Manipulate video frame metadata.'                                  │ 'video' │     false      │ 'video' │      false      │
│    midequalizer    │                                     'Apply Midway Equalization.'                                     │ 'video' │      true      │ 'video' │      false      │
│    minterpolate    │                         'Frame rate conversion using Motion Interpolation.'                          │ 'video' │     false      │ 'video' │      false      │
│     monochrome     │                          'Convert video to gray using custom color filter.'                          │ 'video' │     false      │ 'video' │      false      │
│       morpho       │                                    'Apply Morphological filter.'                                     │ 'video' │      true      │ 'video' │      false      │
│     mpdecimate     │                                   'Remove near-duplicate frames.'                                    │ 'video' │     false      │ 'video' │      false      │
│        msad        │                           'Calculate the MSAD between two video streams.'                            │ 'video' │      true      │ 'video' │      false      │
│      multiply      │                       'Multiply first video stream with second video stream.'                        │ 'video' │      true      │ 'video' │      false      │
│       negate       │                                        'Negate input video.'                                         │ 'video' │     false      │ 'video' │      false      │
│      nlmeans       │                                     'Non-local means denoiser.'                                      │ 'video' │     false      │ 'video' │      false      │
│       nnedi        │             'Apply neural network edge directed interpolation intra-only deinterlacer.'              │ 'video' │     false      │ 'video' │      false      │
│      noformat      │ 'Force libavfilter not to use any of the specified pixel formats for the input to the next filter.'  │ 'video' │     false      │ 'video' │      false      │
│       noise        │                                             'Add noise.'                                             │ 'video' │     false      │ 'video' │      false      │
│     normalize      │                                        'Normalize RGB video.'                                        │ 'video' │     false      │ 'video' │      false      │
│        null        │                              'Pass the source unchanged to the output.'                              │ 'video' │     false      │ 'video' │      false      │
│        ocr         │                                   'Optical Character Recognition.'                                   │ 'video' │     false      │ 'video' │      false      │
│    oscilloscope    │                                       '2D Video Oscilloscope.'                                       │ 'video' │     false      │ 'video' │      false      │
│      overlay       │                            'Overlay a video source on top of the input.'                             │ 'video' │      true      │ 'video' │      false      │
│     owdenoise      │                                      'Denoise using wavelets.'                                       │ 'video' │     false      │ 'video' │      false      │
│        pad         │                                        'Pad the input video.'                                        │ 'video' │     false      │ 'video' │      false      │
│     palettegen     │                            'Find the optimal palette for a given stream.'                            │ 'video' │     false      │ 'video' │      false      │
│     paletteuse     │                         'Use a palette to downsample an input video stream.'                         │ 'video' │      true      │ 'video' │      false      │
│       perms        │                            'Set permissions for the output video frame.'                             │ 'video' │     false      │ 'video' │      false      │
│    perspective     │                                 'Correct the perspective of video.'                                  │ 'video' │     false      │ 'video' │      false      │
│       phase        │                                        'Phase shift fields.'                                         │ 'video' │     false      │ 'video' │      false      │
│  photosensitivity  │                    'Filter out photosensitive epilepsy seizure-inducing flashes.'                    │ 'video' │     false      │ 'video' │      false      │
│    pixdesctest     │                                   'Test pixel format definitions.'                                   │ 'video' │     false      │ 'video' │      false      │
│      pixelize      │                                          'Pixelize video.'                                           │ 'video' │     false      │ 'video' │      false      │
│      pixscope      │                                        'Pixel data analysis.'                                        │ 'video' │     false      │ 'video' │      false      │
│         pp         │                                  'Filter video using libpostproc.'                                   │ 'video' │     false      │ 'video' │      false      │
│        pp7         │                                   'Apply Postprocessing 7 filter.'                                   │ 'video' │     false      │ 'video' │      false      │
│      prewitt       │                                      'Apply prewitt operator.'                                       │ 'video' │     false      │ 'video' │      false      │
│    pseudocolor     │                                  'Make pseudocolored video frames.'                                  │ 'video' │     false      │ 'video' │      false      │
│        psnr        │                           'Calculate the PSNR between two video streams.'                            │ 'video' │      true      │ 'video' │      false      │
│       pullup       │                               'Pullup from field sequence to frames.'                                │ 'video' │     false      │ 'video' │      false      │
│         qp         │                               'Change video quantization parameters.'                                │ 'video' │     false      │ 'video' │      false      │
│       random       │                                       'Return random frames.'                                        │ 'video' │     false      │ 'video' │      false      │
│     readeia608     │        'Read EIA-608 Closed Caption codes from input video and write them to frame metadata.'        │ 'video' │     false      │ 'video' │      false      │
│      readvitc      │                  'Read vertical interval timecode and write it to frame metadata.'                   │ 'video' │     false      │ 'video' │      false      │
│      realtime      │                               'Slow down filtering to match realtime.'                               │ 'video' │     false      │ 'video' │      false      │
│    removegrain     │                                           'Remove grain.'                                            │ 'video' │     false      │ 'video' │      false      │
│     removelogo     │                              'Remove a TV logo based on a mask image.'                               │ 'video' │     false      │ 'video' │      false      │
│    repeatfields    │                        'Hard repeat fields based on MPEG repeat field flag.'                         │ 'video' │     false      │ 'video' │      false      │
│      reverse       │                                          'Reverse a clip.'                                           │ 'video' │     false      │ 'video' │      false      │
│     rgbashift      │                                            'Shift RGBA.'                                             │ 'video' │     false      │ 'video' │      false      │
│      roberts       │                                   'Apply roberts cross operator.'                                    │ 'video' │     false      │ 'video' │      false      │
│       rotate       │                                      'Rotate the input image.'                                       │ 'video' │     false      │ 'video' │      false      │
│        sab         │                                     'Apply shape adaptive blur.'                                     │ 'video' │     false      │ 'video' │      false      │
│       scale        │                    'Scale the input video size and/or convert the image format.'                     │ 'video' │     false      │ 'video' │      false      │
│     scale2ref      │         'Scale the input video size and/or convert the image format to the given reference.'         │ 'video' │      true      │ 'video' │      true       │
│       scdet        │                                     'Detect video scene change'                                      │ 'video' │     false      │ 'video' │      false      │
│       scharr       │                                       'Apply scharr operator.'                                       │ 'video' │     false      │ 'video' │      false      │
│       scroll       │                                        'Scroll input video.'                                         │ 'video' │     false      │ 'video' │      false      │
│   selectivecolor   │                          'Apply CMYK adjustments to specific color ranges.'                          │ 'video' │     false      │ 'video' │      false      │
│      sendcmd       │                                     'Send commands to filters.'                                      │ 'video' │     false      │ 'video' │      false      │
│   separatefields   │                               'Split input video frames into fields.'                                │ 'video' │     false      │ 'video' │      false      │
│       setdar       │                                'Set the frame display aspect ratio.'                                 │ 'video' │     false      │ 'video' │      false      │
│      setfield      │                              'Force field for the output video frame.'                               │ 'video' │     false      │ 'video' │      false      │
│     setparams      │                     'Force field, or color property for the output video frame.'                     │ 'video' │     false      │ 'video' │      false      │
│       setpts       │                                'Set PTS for the output video frame.'                                 │ 'video' │     false      │ 'video' │      false      │
│      setrange      │                           'Force color range for the output video frame.'                            │ 'video' │     false      │ 'video' │      false      │
│       setsar       │                                 'Set the pixel sample aspect ratio.'                                 │ 'video' │     false      │ 'video' │      false      │
│       settb        │                              'Set timebase for the video output link.'                               │ 'video' │     false      │ 'video' │      false      │
│       shear        │                                  'Shear transform the input image.'                                  │ 'video' │     false      │ 'video' │      false      │
│      showinfo      │                           'Show textual information for each video frame.'                           │ 'video' │     false      │ 'video' │      false      │
│    showpalette     │                                       'Display frame palette.'                                       │ 'video' │     false      │ 'video' │      false      │
│   shuffleframes    │                                       'Shuffle video frames.'                                        │ 'video' │     false      │ 'video' │      false      │
│   shufflepixels    │                                       'Shuffle video pixels.'                                        │ 'video' │     false      │ 'video' │      false      │
│   shuffleplanes    │                                       'Shuffle video planes.'                                        │ 'video' │     false      │ 'video' │      false      │
│      sidedata      │                                 'Manipulate video frame side data.'                                  │ 'video' │     false      │ 'video' │      false      │
│    signalstats     │                              'Generate statistics from video analysis.'                              │ 'video' │     false      │ 'video' │      false      │
│        siti        │                 'Calculate spatial information (SI) and temporal information (TI).'                  │ 'video' │     false      │ 'video' │      false      │
│     smartblur      │                        'Blur the input video without impacting the outlines.'                        │ 'video' │     false      │ 'video' │      false      │
│       sobel        │                                       'Apply sobel operator.'                                        │ 'video' │     false      │ 'video' │      false      │
│        spp         │                               'Apply a simple post processing filter.'                               │ 'video' │     false      │ 'video' │      false      │
│         sr         │                        'Apply DNN-based image super resolution to the input.'                        │ 'video' │     false      │ 'video' │      false      │
│        ssim        │                           'Calculate the SSIM between two video streams.'                            │ 'video' │      true      │ 'video' │      false      │
│      stereo3d      │                                'Convert video stereoscopic 3D view.'                                 │ 'video' │     false      │ 'video' │      false      │
│     subtitles      │                  'Render text subtitles onto input video using the libass library.'                  │ 'video' │     false      │ 'video' │      false      │
│     super2xsai     │                  'Scale the input by 2x using the Super2xSaI pixel art algorithm.'                   │ 'video' │     false      │ 'video' │      false      │
│      swaprect      │                                'Swap 2 rectangular objects in video.'                                │ 'video' │     false      │ 'video' │      false      │
│       swapuv       │                                      'Swap U and V components.'                                      │ 'video' │     false      │ 'video' │      false      │
│       tblend       │                                      'Blend successive frames.'                                      │ 'video' │     false      │ 'video' │      false      │
│      telecine      │                                     'Apply a telecine pattern.'                                      │ 'video' │     false      │ 'video' │      false      │
│     thistogram     │                               'Compute and draw a temporal histogram.'                               │ 'video' │     false      │ 'video' │      false      │
│     thumbnail      │          'Select the most representative frame in a given sequence of consecutive frames.'           │ 'video' │     false      │ 'video' │      false      │
│        tile        │                              'Tile several successive frames together.'                              │ 'video' │     false      │ 'video' │      false      │
│     tinterlace     │                                'Perform temporal field interlacing.'                                 │ 'video' │     false      │ 'video' │      false      │
│       tlut2        │                    'Compute and apply a lookup table from two successive frames.'                    │ 'video' │     false      │ 'video' │      false      │
│      tmedian       │                             'Pick median pixels from successive frames.'                             │ 'video' │     false      │ 'video' │      false      │
│   tmidequalizer    │                                'Apply Temporal Midway Equalization.'                                 │ 'video' │     false      │ 'video' │      false      │
│        tmix        │                                    'Mix successive video frames.'                                    │ 'video' │     false      │ 'video' │      false      │
│      tonemap       │                            'Conversion to/from different dynamic ranges.'                            │ 'video' │     false      │ 'video' │      false      │
│        tpad        │                                   'Temporarily pad video frames.'                                    │ 'video' │     false      │ 'video' │      false      │
│     transpose      │                                       'Transpose input video.'                                       │ 'video' │     false      │ 'video' │      false      │
│        trim        │                     'Pick one continuous section from the input, drop the rest.'                     │ 'video' │     false      │ 'video' │      false      │
│      unsharp       │                                  'Sharpen or blur the input video.'                                  │ 'video' │     false      │ 'video' │      false      │
│       untile       │                             'Untile a frame into a sequence of frames.'                              │ 'video' │     false      │ 'video' │      false      │
│        v360        │                                  'Convert 360 projection of video.'                                  │ 'video' │     false      │ 'video' │      false      │
│   vaguedenoiser    │                                  'Apply a Wavelet based Denoiser.'                                   │ 'video' │     false      │ 'video' │      false      │
│      varblur       │                                    'Apply Variable Blur filter.'                                     │ 'video' │      true      │ 'video' │      false      │
│    vectorscope     │                                         'Video vectorscope.'                                         │ 'video' │     false      │ 'video' │      false      │
│       vflip        │                                  'Flip the input video vertically.'                                  │ 'video' │     false      │ 'video' │      false      │
│       vfrdet       │                                 'Variable frame rate detect filter.'                                 │ 'video' │     false      │ 'video' │      false      │
│      vibrance      │                                     'Boost or alter saturation.'                                     │ 'video' │     false      │ 'video' │      false      │
│   vidstabdetect    │ 'Extract relative transformations, pass 1 of 2 for stabilization (see vidstabtransform for pass 2).' │ 'video' │     false      │ 'video' │      false      │
│  vidstabtransform  │        'Transform the frames, pass 2 of 2 for stabilization (see vidstabdetect for pass 1).'         │ 'video' │     false      │ 'video' │      false      │
│        vif         │                            'Calculate the VIF between two video streams.'                            │ 'video' │      true      │ 'video' │      false      │
│      vignette      │                                 'Make or reverse a vignette effect.'                                 │ 'video' │     false      │ 'video' │      false      │
│     vmafmotion     │                                  'Calculate the VMAF Motion score.'                                  │ 'video' │     false      │ 'video' │      false      │
│       w3fdif       │                            'Apply Martin Weston three field deinterlace.'                            │ 'video' │     false      │ 'video' │      false      │
│      waveform      │                                      'Video waveform monitor.'                                       │ 'video' │     false      │ 'video' │      false      │
│       weave        │                               'Weave input video fields into frames.'                                │ 'video' │     false      │ 'video' │      false      │
│        xbr         │                                'Scale the input using xBR algorithm.'                                │ 'video' │     false      │ 'video' │      false      │
│     xcorrelate     │                    'Cross-correlate first video stream with second video stream.'                    │ 'video' │      true      │ 'video' │      false      │
│       xfade        │                              'Cross fade one video with another video.'                              │ 'video' │      true      │ 'video' │      false      │
│       yadif        │                                    'Deinterlace the input image.'                                    │ 'video' │     false      │ 'video' │      false      │
│ yadif_videotoolbox │                         'YADIF for VideoToolbox frames using Metal compute'                          │ 'video' │     false      │ 'video' │      false      │
│      yaepblur      │                              'Yet another edge preserving blur filter.'                              │ 'video' │     false      │ 'video' │      false      │
│        zmq         │                      'Receive commands through ZMQ and broker them to filters.'                      │ 'video' │     false      │ 'video' │      false      │
│      zoompan       │                                      'Apply Zoom & Pan effect.'                                      │ 'video' │     false      │ 'video' │      false      │
│       zscale       │                        'Apply resizing, colorspace and bit depth conversion.'                        │ 'video' │     false      │ 'video' │      false      │
│       allrgb       │                                      'Generate all RGB colors.'                                      │ 'none'  │     false      │ 'video' │      false      │
│       allyuv       │                                      'Generate all yuv colors.'                                      │ 'none'  │     false      │ 'video' │      false      │
│      cellauto      │                   'Create pattern generated by an elementary cellular automaton.'                    │ 'none'  │     false      │ 'video' │      false      │
│       color        │                                'Provide an uniformly colored input.'                                 │ 'none'  │     false      │ 'video' │      false      │
│     colorchart     │                                   'Generate color checker chart.'                                    │ 'none'  │     false      │ 'video' │      false      │
│   colorspectrum    │                                     'Generate colors spectrum.'                                      │ 'none'  │     false      │ 'video' │      false      │
│    coreimagesrc    │                       'Video source using image generators of CoreImage API.'                        │ 'none'  │     false      │ 'video' │      false      │
│     frei0r_src     │                                     'Generate a frei0r source.'                                      │ 'none'  │     false      │ 'video' │      false      │
│     gradients      │                                         'Draw a gradients.'                                          │ 'none'  │     false      │ 'video' │      false      │
│    haldclutsrc     │                                   'Provide an identity Hald CLUT.'                                   │ 'none'  │     false      │ 'video' │      false      │
│        life        │                                            'Create life.'                                            │ 'none'  │     false      │ 'video' │      false      │
│     mandelbrot     │                                    'Render a Mandelbrot fractal.'                                    │ 'none'  │     false      │ 'video' │      false      │
│     mptestsrc      │                                   'Generate various test pattern.'                                   │ 'none'  │     false      │ 'video' │      false      │
│      nullsrc       │                        'Null video source, return unprocessed video frames.'                         │ 'none'  │     false      │ 'video' │      false      │
│     pal75bars      │                                    'Generate PAL 75% color bars.'                                    │ 'none'  │     false      │ 'video' │      false      │
│     pal100bars     │                                   'Generate PAL 100% color bars.'                                    │ 'none'  │     false      │ 'video' │      false      │
│     rgbtestsrc     │                                     'Generate RGB test pattern.'                                     │ 'none'  │     false      │ 'video' │      false      │
│     sierpinski     │                                    'Render a Sierpinski fractal.'                                    │ 'none'  │     false      │ 'video' │      false      │
│     smptebars      │                                     'Generate SMPTE color bars.'                                     │ 'none'  │     false      │ 'video' │      false      │
│    smptehdbars     │                                   'Generate SMPTE HD color bars.'                                    │ 'none'  │     false      │ 'video' │      false      │
│      testsrc       │                                       'Generate test pattern.'                                       │ 'none'  │     false      │ 'video' │      false      │
│      testsrc2      │                                   'Generate another test pattern.'                                   │ 'none'  │     false      │ 'video' │      false      │
│     yuvtestsrc     │                                     'Generate YUV test pattern.'                                     │ 'none'  │     false      │ 'video' │      false      │
│      nullsink      │                            'Do absolutely nothing with the input video.'                             │ 'video' │     false      │ 'none'  │      false      │
│     abitscope      │                        'Convert input audio to audio bit scope video output.'                        │ 'audio' │     false      │ 'video' │      false      │
│     adrawgraph     │                              'Draw a graph using input audio metadata.'                              │ 'audio' │     false      │ 'video' │      false      │
│   agraphmonitor    │                                  'Show various filtergraph stats.'                                   │ 'audio' │     false      │ 'video' │      false      │
│     ahistogram     │                           'Convert input audio to histogram video output.'                           │ 'audio' │     false      │ 'video' │      false      │
│    avectorscope    │                          'Convert input audio to vectorscope video output.'                          │ 'audio' │     false      │ 'video' │      false      │
│      showcqt       │         'Convert input audio to a CQT (Constant/Clamped Q Transform) spectrum video output.'         │ 'audio' │     false      │ 'video' │      false      │
│     showfreqs      │                         'Convert input audio to a frequencies video output.'                         │ 'audio' │     false      │ 'video' │      false      │
│    showspatial     │                           'Convert input audio to a spatial video output.'                           │ 'audio' │     false      │ 'video' │      false      │
│    showspectrum    │                          'Convert input audio to a spectrum video output.'                           │ 'audio' │     false      │ 'video' │      false      │
│  showspectrumpic   │                   'Convert input audio to a spectrum video output single picture.'                   │ 'audio' │     false      │ 'video' │      false      │
│     showvolume     │                            'Convert input audio volume to video output.'                             │ 'audio' │     false      │ 'video' │      false      │
│     showwaves      │                               'Convert input audio to a video output.'                               │ 'audio' │     false      │ 'video' │      false      │
│    showwavespic    │                       'Convert input audio to a video output single picture.'                        │ 'audio' │     false      │ 'video' │      false      │
│   spectrumsynth    │                           'Convert input spectrum videos to audio output.'                           │ 'video' │      true      │ 'audio' │      false      │
│       afifo        │                     'Buffer input frames and send them when they are requested.'                     │ 'audio' │     false      │ 'audio' │      false      │
│        fifo        │                     'Buffer input images and send them when they are requested.'                     │ 'video' │     false      │ 'video' │      false      │
│      abuffer       │                 'Buffer audio frames, and make them accessible to the filterchain.'                  │ 'none'  │     false      │ 'audio' │      false      │
│       buffer       │                 'Buffer video frames, and make them accessible to the filterchain.'                  │ 'none'  │     false      │ 'video' │      false      │
│    abuffersink     │            'Buffer audio frames, and make them available to the end of the filter graph.'            │ 'audio' │     false      │ 'none'  │      false      │
│     buffersink     │            'Buffer video frames, and make them available to the end of the filter graph.'            │ 'video' │     false      │ 'none'  │      false      │
└────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────┴─────────┴────────────────┴─────────┴─────────────────┘
*/

/* Automatic video builder */
// Automatically render a video with the following format:
// final result scene, rewind scene, main scene
// The final result scene is a 10 second video that shows the final result, it's mostly the last 10 seconds of the raw video
// The rewind scene is a 10 second video of all the frames of the main video in reverse order
// The main scene is the entire raw video from start to finish, without the last 10 seconds of the raw video

import ffmpeg from 'fluent-ffmpeg';
import promptSync from 'prompt-sync';
import { log, getVideos, getDurationInSec, getAllDurations, formatTime } from './utils.js';

const prompt = promptSync();

const PATH_RAW = './videos/raw/';
const PATH_TEMP = './videos/temp/';
const PATH_FINAL = './videos/final/';
const VIDEO_FORMAT = '.mp4';

const RAW_VIDEOS = getVideos(PATH_RAW);
const TEMP_VIDEOS = getVideos(PATH_TEMP);

const rawVideos = RAW_VIDEOS.map(video => PATH_RAW + video);
const rawVideoDurations = await getAllDurations(rawVideos);
const rawVideosTotalDuration = rawVideoDurations.reduce((a, b) => a + b, 0);

const introRawVideo = rawVideos[rawVideos.length - 1]; // Last videoclip is used for the intro scene
const introRawVideoDurationInSec = rawVideoDurations[rawVideoDurations.length - 1];

const startTimeInSec = 8;// prompt('Enter the start time of the main video (in seconds): ');
const introEndTimeInSec = 106.5;// prompt('Enter the end time of the main video (in seconds): ') || introRawVideoDurationInSec;
const introStartTime = introEndTimeInSec - 10;

const mainVideoDurationInSec = rawVideosTotalDuration - startTimeInSec + (introRawVideoDurationInSec - introEndTimeInSec);

// The Final Result Scene (or Intro) is the last 10 seconds of the last of the raw videos
const createIntroVideo = () => {
    const startTime = new Date().getTime();

    ffmpeg(introRawVideo)
        .on('start', () => log(`Creating intro video...`))
        .on('progress', (progress) => log(`Creating intro video: ${progress.percent}%`))
        .on('end', () => {
            log(`\nIntro video created!`);
            log(`Done in: ${formatTime((new Date().getTime() - startTime) / 1000)}`);
        })
        .setStartTime(introStartTime)
        .setDuration(10)
        .output(PATH_TEMP + 'intro' + VIDEO_FORMAT)
        .run();
};

const trimClips = () => {
    const startTime = new Date().getTime();
    const firstClip = rawVideos[0];
    const lastClip = rawVideos[rawVideos.length - 1];

    if (firstClip === lastClip) {
        ffmpeg(firstClip)
            .on('start', () => log(`Trimming first clip...`))
            .on('progress', (progress) => log(`Trimming first clip: ${progress.percent}%`))
            .on('end', () => {
                log(`\nFirst clip trimmed!`);
                log(`Done in: ${formatTime((new Date().getTime() - startTime) / 1000)}`);
            })
            .setStartTime(startTimeInSec)
            .setDuration(introEndTimeInSec - 2) // remove an extra 2 seconds
            .output(PATH_TEMP + 'first' + VIDEO_FORMAT)
            .run();
    } else {
        ffmpeg(firstClip)
            .on('start', () => log(`Trimming first clip...`))
            .on('progress', (progress) => log(`Trimming first clip: ${progress.percent}%`))
            .on('end', () => {
                log(`\nFirst clip trimmed!`);
                log(`Done in: ${formatTime((new Date().getTime() - startTime) / 1000)}`);
            })
            .setStartTime(startTimeInSec)
            .output(PATH_TEMP + 'first' + VIDEO_FORMAT)
            .run();

        const startTime2 = new Date().getTime();
        ffmpeg(lastClip)
            .on('start', () => log(`Trimming last clip...`))
            .on('progress', (progress) => log(`Trimming last clip: ${progress.percent}%`))
            .on('end', () => {
                log(`\nLast clip trimmed!`);
                log(`Done in: ${formatTime((new Date().getTime() - startTime2) / 1000)}`);
            })
            .setDuration(introEndTimeInSec - 2) // remove an extra 2 seconds
            .output(PATH_TEMP + 'last' + VIDEO_FORMAT)
            .run();
    }
}

// The Main Scene is the entire raw video, without the last 10 seconds
const createMainVideo = () => {
    const startTime = new Date().getTime();
    const main = ffmpeg()
        .on('start', () => log(`Creating Main Video...`))
        .on('progress', (progress) => log(`Creating Main Video: ${progress.percent}%`))
        .on('end', () => {
            log(`\nMain video created!`);
            log(`Done in: ${formatTime((new Date().getTime() - startTime) / 1000)}`);
        })
    ;

    rawVideos.forEach(video => main.addInput(video));
    main
        .setDuration(formatTime(mainVideoDurationInSec))
        .mergeToFile(PATH_TEMP + 'main' + VIDEO_FORMAT, PATH_TEMP)
    ;
};

const createIntro = prompt('Create intro video? (y/n): ') === 'y';

if (createIntro)
    createIntroVideo();

const createMain = prompt('Create main video? (y/n): ') === 'y';

if (createMain) {
    trimClips();
    // createMainVideo();
}
