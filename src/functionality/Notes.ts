export interface INote {
    name: string;
    frequency: number;
    octave: number;
}

const Bminus1 = 15.43;

const C0 = 16.35;
const Db0 = 17.32;
const D0 = 18.35;
const Eb0 = 19.45;
const E0 = 20.6;
const F0 = 21.83;
const Gb0 = 23.12;
const G0 = 24.5;
const Ab0 = 25.96;
const A0 = 27.5;
const Bb0 = 29.14;
const B0 = 30.87;

const C1 = 32.7;
const Db1 = 34.65;
const D1 = 36.71;
const Eb1 = 38.89;
const E1 = 41.2;
const F1 = 43.65;
const Gb1 = 46.25;
const G1 = 49;
const Ab1 = 51.91;
const A1 = 55;
const Bb1 = 58.27;
const B1 = 61.74;

const C2 = 65.41;
const Db2 = 69.3;
const D2 = 73.42;
const Eb2 = 77.78;
const E2 = 82.41;
const F2 = 87.31;
const Gb2 = 92.5;
const G2 = 98;
const Ab2 = 103.83;
const A2 = 110;
const Bb2 = 116.54;
const B2 = 123.47;

const C3 = 130.81;
const Db3 = 138.59;
const D3 = 146.83;
const Eb3 = 155.56;
const E3 = 164.81;
const F3 = 174.61;
const Gb3 = 185;
const G3 = 196;
const Ab3 = 207.65;
const A3 = 220;
const Bb3 = 233.08;
const B3 = 246.94;

const C4 = 261.63;
const Db4 = 277.18;
const D4 = 293.66;
const Eb4 = 311.13;
const E4 = 329.63;
const F4 = 349.23;
const Gb4 = 369.99;
const G4 = 392;
const Ab4 = 415.3;
const A4 = 440;
const Bb4 = 466.16;
const B4 = 493.88;

const C5 = 523.25;
const Db5 = 554.37;
const D5 = 587.33;
const Eb5 = 622.25;
const E5 = 659.25;
const F5 = 698.46;
const Gb5 = 739.99;
const G5 = 783.99;
const Ab5 = 830.61;
const A5 = 880;
const Bb5 = 932.33;
const B5 = 987.77;

const C6 = 1046.5;
const Db6 = 1108.73;
const D6 = 1174.66;
const Eb6 = 1244.51;
const E6 = 1318.51;
const F6 = 1396.91;
const Gb6 = 1479.98;
const G6 = 1567.98;
const Ab6 = 1661.22;
const A6 = 1760;
const Bb6 = 1864.66;
const B6 = 1975.53;

const C7 = 2093;
const Db7 = 2217.46;
const D7 = 2349.32;
const Eb7 = 2489.02;
const E7 = 2637.02;
const F7 = 2793.83;
const Gb7 = 2959.96;
const G7 = 3135.96;
const Ab7 = 3322.44;
const A7 = 3520;
const Bb7 = 3729.31;
const B7 = 3951.07;

const C8 = 4186.01;
const Db8 = 4434.92;
const D8 = 4698.63;
const Eb8 = 4978.03;
const E8 = 5274.04;
const F8 = 5587.65;
const Gb8 = 5919.91;
const G8 = 6271.93;
const Ab8 = 6644.88;
const A8 = 7040;
const Bb8 = 7458.62;
const B8 = 7902.13;

const C9 = 8372.02;

// Every semitone frequency we would ever play, in order.
// Transposing a note is a case of moving N places left or right in this array.
export const allNoteFrequencies = [
    Bminus1, 
    C0, Db0, D0, Eb0, E0, F0, Gb0, G0, Ab0, A0, Bb0, B0,
    C1, Db1, D1, Eb1, E1, F1, Gb1, G1, Ab1, A1, Bb1, B1,
    C2, Db2, D2, Eb2, E2, F2, Gb2, G2, Ab2, A2, Bb2, B2,
    C3, Db3, D3, Eb3, E3, F3, Gb3, G3, Ab3, A3, Bb3, B3,
    C4, Db4, D4, Eb4, E4, F4, Gb4, G4, Ab4, A4, Bb4, B4,
    C5, Db5, D5, Eb5, E5, F5, Gb5, G5, Ab5, A5, Bb5, B5,
    C6, Db6, D6, Eb6, E6, F6, Gb6, G6, Ab6, A6, Bb6, B6,
    C7, Db7, D7, Eb7, E7, F7, Gb7, G7, Ab7, A7, Bb7, B7,
    C8, Db8, D8, Eb8, E8, F8, Gb8, G8, Ab8, A8, Bb8, B8,
    C9,
];

const abstractNotes = [
    { name: 'C♭', semitonesAboveC: -1 },
    { name: 'C', semitonesAboveC: 0 },
    { name: 'C♯', semitonesAboveC: 1 },
    { name: 'D♭', semitonesAboveC: 1 },
    { name: 'D', semitonesAboveC: 2 },
    { name: 'D♯', semitonesAboveC: 3 },
    { name: 'E♭', semitonesAboveC: 3 },
    { name: 'E', semitonesAboveC: 4 },
    { name: 'E♯', semitonesAboveC: 5 },
    { name: 'F♭', semitonesAboveC: 4 },
    { name: 'F', semitonesAboveC: 5 },
    { name: 'F♯', semitonesAboveC: 6 },
    { name: 'G♭', semitonesAboveC: 6 },
    { name: 'G', semitonesAboveC: 7 },
    { name: 'G♯', semitonesAboveC: 8 },
    { name: 'A♭', semitonesAboveC: 8 },
    { name: 'A', semitonesAboveC: 9 },
    { name: 'A♯', semitonesAboveC: 10 },
    { name: 'B♭', semitonesAboveC: 10 },
    { name: 'B', semitonesAboveC: 11 },
    { name: 'B♯', semitonesAboveC: 12 },
];

export const Cb =  0, C =  1, Cs =  2,
             Db =  3, D =  4, Ds =  5,
             Eb =  6, E =  7, Es =  8,
             Fb =  9, F = 10, Fs = 11,
             Gb = 12, G = 13, Gs = 14,
             Ab = 15, A = 16, As = 17,
             Bb = 18, B = 19, Bs = 20;

function createOctave(cFrequencyIndex: number, octaveNumber: number): INote[] {
    return abstractNotes.map((note, index) => {
        const frequencyIndex = cFrequencyIndex + note.semitonesAboveC; // TODO: include this in the note, for ease of transposing?

        return {
            name: note.name,
            frequency: allNoteFrequencies[frequencyIndex],
            octave: octaveNumber,
        };
    });
}

export const octaves = [
    createOctave(1, 0),
    createOctave(13, 1),
    createOctave(25, 2),
    createOctave(37, 3),
    createOctave(49, 4),
    createOctave(61, 5),
    createOctave(73, 6),
    createOctave(85, 7),
    createOctave(97, 8),
]