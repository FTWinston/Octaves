import { IVoice } from './Voices';

//const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;

interface INoteOscillator {
    oscillator: OscillatorNode;
    gain: GainNode;
}

export class Audio {
    private readonly audioCtx: AudioContext;
    private readonly gain: GainNode;
    private readonly oscillators = new Map<number, INoteOscillator>();

    private voice: IVoice = {
        name: 'Default',
        apply: o => { o.type = 'sine'; return o; },
    };

    constructor() {
        this.audioCtx = new AudioContext();
        this.gain = this.audioCtx.createGain();

        const compressor = this.audioCtx.createDynamicsCompressor();
        compressor.threshold.setValueAtTime(-50, this.audioCtx.currentTime);
        compressor.knee.setValueAtTime(40, this.audioCtx.currentTime);
        compressor.ratio.setValueAtTime(12, this.audioCtx.currentTime);
        compressor.attack.setValueAtTime(0, this.audioCtx.currentTime);
        compressor.release.setValueAtTime(0.25, this.audioCtx.currentTime);

        this.gain.connect(compressor);

        compressor.connect(this.audioCtx.destination);
    }

    public setVolume(volume: number) {
        this.gain.gain.setValueAtTime(volume, this.audioCtx.currentTime);
    }

    public setVoice(voice: IVoice) {
        this.voice = voice;
    }

    public start(key: number, frequency: number) {
        let noteOscillator = this.oscillators.get(key);

        if (noteOscillator !== undefined) {
            // already playing, cannot play more
            return;
        }

        const oscillator = this.audioCtx.createOscillator();
        this.voice.apply(oscillator);

        oscillator.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
        oscillator.start();

        const weightedDecibels = this.determineWeighting(frequency);
        const weightedGain = 1 / Math.pow(10, weightedDecibels / 20);
        
        const noteGain = this.audioCtx.createGain();
        noteGain.gain.setValueAtTime(weightedGain, this.audioCtx.currentTime);
        
        oscillator.connect(noteGain);
        noteGain.connect(this.gain);
        
        this.oscillators.set(key, {
            oscillator: oscillator,
            gain: noteGain,
        });
    }

    public stop(key: number) {
        const noteOscillator = this.oscillators.get(key);

        if (noteOscillator === undefined) {
            // not playing this frequency, nothing to stop
            return;
        }

        this.oscillators.delete(key);
        this.stopOscillator(noteOscillator);
    }

    public stopAll() {
        for (const oscillator of this.oscillators.values()) {
            this.stopOscillator(oscillator);
        }

        this.oscillators.clear();
    }

    private stopOscillator(noteOscillator: INoteOscillator) {
        // fade out, to avoid a "pop" from the sudden cutoff
        const gain = noteOscillator.gain.gain;
        gain.setValueAtTime(gain.value, this.audioCtx.currentTime); 
        gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.05);

        setTimeout(() => {
            noteOscillator.oscillator.stop();
            noteOscillator.gain.disconnect(this.gain);
        }, 25);
    }

    private determineWeighting(frequency: number) {
        // This is the A-weighting, to make notes of different pitches have the same apparent volume.
        // See http://www.diracdelta.co.uk/science/source/a/w/aweighting/source.html

        const fSquared = frequency * frequency;
        const x = (1.562339 * fSquared * fSquared) / ((fSquared + 11589.093052) * (fSquared + 544440.670461));
        const y = (22428810000000000 * fSquared * fSquared) / ((fSquared + 424.318677406) * (fSquared + 424.318677406) * (fSquared + 148699001.408) * (fSquared + 148699001.408));

        return Math.log10(x) + Math.log10(y);
    }
}