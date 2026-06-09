// Web Audio API custom synthesizer for true 432Hz carrier waves and 8Hz binaural beats

let audioCtx: AudioContext | null = null;
let carrierOsc: OscillatorNode | null = null;
let alphaOsc: OscillatorNode | null = null;
let mainGain: GainNode | null = null;

export function startHertzianCarrier(carrierFreq: number = 432, alphaFreq: number = 8) {
  try {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      audioCtx = new AudioCtxClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Stop existing oscillators
    stopHertzianCarrier();

    // Create Main gain to control volume safely
    mainGain = audioCtx.createGain();
    mainGain.gain.setValueAtTime(0.001, audioCtx.currentTime); // fade in
    mainGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 1.5); // low volume safe level
    mainGain.connect(audioCtx.destination);

    // Channel Merger for Binaural Beats (Left: carrierFreq, Right: carrierFreq + alphaFreq)
    const merger = audioCtx.createChannelMerger(2);
    merger.connect(mainGain);

    // Left channel Oscillator (432 Hz)
    carrierOsc = audioCtx.createOscillator();
    carrierOsc.type = 'sine';
    carrierOsc.frequency.setValueAtTime(carrierFreq, audioCtx.currentTime);
    const leftGain = audioCtx.createGain();
    leftGain.gain.setValueAtTime(1.0, audioCtx.currentTime);
    carrierOsc.connect(leftGain);
    leftGain.connect(merger, 0, 0); // connect to left channel

    // Right channel Oscillator (432 + 8 = 440 Hz for 8Hz Binaural pulse)
    alphaOsc = audioCtx.createOscillator();
    alphaOsc.type = 'sine';
    alphaOsc.frequency.setValueAtTime(carrierFreq + alphaFreq, audioCtx.currentTime);
    const rightGain = audioCtx.createGain();
    rightGain.gain.setValueAtTime(1.0, audioCtx.currentTime);
    alphaOsc.connect(rightGain);
    rightGain.connect(merger, 0, 1); // connect to right channel

    // Start both
    carrierOsc.start();
    alphaOsc.start();

    return true;
  } catch (error) {
    console.error("Audio Context initialization failed:", error);
    return false;
  }
}

export function stopHertzianCarrier() {
  if (carrierOsc) {
    try {
      carrierOsc.stop();
    } catch (e) {}
    carrierOsc = null;
  }
  if (alphaOsc) {
    try {
      alphaOsc.stop();
    } catch (e) {}
    alphaOsc = null;
  }
  if (mainGain && audioCtx) {
    try {
      mainGain.gain.setValueAtTime(mainGain.gain.value, audioCtx.currentTime);
      mainGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    } catch (e) {}
  }
}

export function isAudioRunning(): boolean {
  return audioCtx !== null && audioCtx.state === 'running' && carrierOsc !== null;
}
