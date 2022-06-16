import { Bass, ChorusStrings, Dissonant2, Organ2, Organ3, Celeste, Brass, Throaty } from '@mohayonao/wave-tables';

export interface IVoice {
    name: string;
    apply: (oscillator: OscillatorNode) => void;
}

export const voices: IVoice[] = [
    {
        name: 'Sine wave',
        apply: o => o.type = 'sine',
    },
    {
        name: 'Bass',
        apply: o => {
            const wave = o.context.createPeriodicWave(Bass.real, Bass.imag, {disableNormalization: true});
            o.setPeriodicWave(wave);
        },
    },
    {
        name: 'Organ 1',
        apply: o => {
            const wave = o.context.createPeriodicWave(Organ2.real, Organ2.imag, {disableNormalization: true});
            o.setPeriodicWave(wave);
        },
    },
    {
        name: 'Organ 2',
        apply: o => {
            const wave = o.context.createPeriodicWave(Organ3.real, Organ3.imag, {disableNormalization: true});
            o.setPeriodicWave(wave);
        },
    },
    {
        name: 'Organ 3',
        apply: o => {
            const wave = o.context.createPeriodicWave(Dissonant2.real, Dissonant2.imag, {disableNormalization: true});
            o.setPeriodicWave(wave);
        },
    },
    {
        name: 'Brass',
        apply: o => {
            const wave = o.context.createPeriodicWave(Brass.real, Brass.imag, {disableNormalization: true});
            o.setPeriodicWave(wave);
        },
    },
    {
        name: 'Celeste',
        apply: o => {
            const wave = o.context.createPeriodicWave(Celeste.real, Celeste.imag, {disableNormalization: true});
            o.setPeriodicWave(wave);
        },
    },
    {
        name: 'Throaty',
        apply: o => {
            const wave = o.context.createPeriodicWave(Throaty.real, Throaty.imag, {disableNormalization: true});
            o.setPeriodicWave(wave);
        },
    },
    {
        name: 'Chorus Strings',
        apply: o => {
            const wave = o.context.createPeriodicWave(ChorusStrings.real, ChorusStrings.imag, {disableNormalization: true});
            o.setPeriodicWave(wave);
        },
    },
    {
        name: 'Sawtooth',
        apply: o => o.type = 'sawtooth',
    },
    {
        name: 'Square',
        apply: o => o.type = 'square',
    },
]