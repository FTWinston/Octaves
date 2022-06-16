import { Cb, C, Cs, Db, D, Ds, Eb, E, Es, Fb, F, Fs, Gb, G, Gs, Ab, A, As, Bb, B, Bs } from './Notes';

export interface IScale {
    name: string;
    notes: number[];
}

export interface IScaleType {
    name: string;
    notesBeforeTonic: number;
    scales: IScale[];
}

export const scaleTypes: IScaleType[] =
[
    {
        name: 'Major',
        notesBeforeTonic: 6,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, Bb, C, Db, Eb, F, G ],
            },
            {
                name: 'A',
                notes: [ A, B, Cs, D, E, Fs, Gs ],
            },
            {
                name: 'B♭',
                notes: [ Bb, C, D, Eb, F, G, A ],
            },
            {
                name: 'B',
                notes: [ B, Cs, Ds, E, As, Gs, As ],
            },
            {
                name: 'C♭',
                notes: [ Cb, Db, Eb, Fb, Gb, Ab, Bb ],
            },
            {
                name: 'C',
                notes: [ C, D, E, F, G, A, B ],
            },
            {
                name: 'C♯',
                notes: [ Cs, Ds, Es, Fs, Gs, As, Bs ],
            },
            {
                name: 'D♭',
                notes: [ Db, Eb, F, Gb, Ab, Bb, C ],
            },
            {
                name: 'D',
                notes: [ D, E, Fs, G, A, B, Cs ],
            },
            {
                name: 'E♭',
                notes: [ Eb, F, G, Ab, Bb, C, D ],
            },
            {
                name: 'E',
                notes: [ E, Fs, Gs, A, B, Cs, Ds ],
            },
            {
                name: 'F',
                notes: [ F, G, A, Bb, C, D, E ],
            },
            {
                name: 'F♯',
                notes: [ Fs, Gs, As, B, Cs, Ds, Es ],
            },
            {
                name: 'G♭',
                notes: [ Gb, Ab, Bb, Cb, Db, Eb, F ],
            },
            {
                name: 'G',
                notes: [ G, A, B, C, D, E, Fs ],
            },
        ]
    },
    {
        name: 'Minor', // Natural minor
        notesBeforeTonic: 6,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, Bb, Cb, Db, Eb, Fb, Gb ],
            },
            {
                name: 'A',
                notes: [ A, B, C, D, E, F, G ],
            },
            {
                name: 'A♯',
                notes: [ As, Bs, Cs, Ds, Es, Fs, Gs ],
            },
            {
                name: 'B♭',
                notes: [ Bb, C, Db, Eb, F, Gb, Ab ],
            },
            {
                name: 'B',
                notes: [ B, Cs, D, E, Fs, G, A ],
            },
            {
                name: 'C',
                notes: [ C, D, Eb, F, G, Ab, Bb ],
            },
            {
                name: 'C♯',
                notes: [ Cs, Ds, E, Fs, Gs, A, B ],
            },
            {
                name: 'D',
                notes: [ D, E, F, G, A, Bb, C ],
            },
            {
                name: 'D♯',
                notes: [ Ds, Es, Fs, Gs, As, B, Cs ],
            },
            {
                name: 'E♭',
                notes: [ Eb, F, Gb, Ab, Bb, Cb, Db ],
            },
            {
                name: 'E',
                notes: [ E, Fs, G, A, B, C, D ],
            },
            {
                name: 'F',
                notes: [ F, G, Ab, Bb, C, Db, Eb ],
            },
            {
                name: 'F♯',
                notes: [ Fs, Gs, A, B, Cs, D, E ],
            },
            {
                name: 'G',
                notes: [ G, A, Bb, C, D, Eb, F ],
            },
            {
                name: 'G♯',
                notes: [ Gs, As, B, Cs, Ds, E, Fs ],
            },
        ]
    },
    {
        name: 'Chromatic',
        notesBeforeTonic: 5,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, A, Bb, B, C, Db, D, Eb, E, F, Gb, G ],
            },
            {
                name: 'A',
                notes: [ A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab ],
            },
            {
                name: 'B♭',
                notes: [ Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab, A ],
            },
            {
                name: 'B',
                notes: [ B, C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb ],
            },
            {
                name: 'C',
                notes: [ C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B ],
            },
            {
                name: 'D♭',
                notes: [ Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B, C ],
            },
            {
                name: 'D',
                notes: [ D, Eb, E, F, Gb, G, Ab, A, Bb, B, C, Db ],
            },
            {
                name: 'E♭',
                notes: [ Eb, E, F, Gb, G, Ab, A, Bb, B, C, Db, D ],
            },
            {
                name: 'E',
                notes: [ E, F, Gb, G, Ab, A, Bb, B, C, Db, D, Eb ],
            },
            {
                name: 'F',
                notes: [ F, Gb, G, Ab, A, Bb, B, C, Db, D, Eb, E ],
            },
            {
                name: 'G♭',
                notes: [ Gb, G, Ab, A, Bb, B, C, Db, D, Eb, E, F ],
            },
            {
                name: 'G',
                notes: [ G, Ab, A, Bb, B, C, Db, D, Eb, E, F, Gb ],
            },
        ]
    },
    {
        name: 'Melodic Minor',
        notesBeforeTonic: 6,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, Bb, B, Db, Eb, F, G ],
            },
            {
                name: 'A',
                notes: [ A, B, C, D, E, Gb, Ab ],
            },
            {
                name: 'B♭',
                notes: [ Bb, C, Db, Eb, F, G, A ],
            },
            {
                name: 'B',
                notes: [ B, Db, D, E, Gb, Ab, Bb ],
            },
            {
                name: 'C',
                notes: [ C, D, Eb, F, G, A, B ],
            },
            {
                name: 'D♭',
                notes: [ Db, Eb, E, Gb, Ab, Bb, C ],
            },
            {
                name: 'D',
                notes: [ D, E, F, G, A, B, Db ],
            },
            {
                name: 'E♭',
                notes: [ Eb, F, Gb, Ab, Bb, C, D ],
            },
            {
                name: 'E',
                notes: [ E, Gb, G, A, B, Db, Eb ],
            },
            {
                name: 'F',
                notes: [ F, G, Ab, Bb, C, D, E ],
            },
            {
                name: 'G♭',
                notes: [ Gb, Ab, A, B, Db, Eb, F ],
            },
            {
                name: 'G',
                notes: [ G, A, Bb, C, D, E, Gb ],
            },
        ]
    },
    {
        name: 'Harmonic Minor',
        notesBeforeTonic: 6,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, Bb, B, Db, Eb, E, G ],
            },
            {
                name: 'A',
                notes: [ A, B, C, D, E, F, Ab ],
            },
            {
                name: 'B♭',
                notes: [ Bb, C, Db, Eb, F, Gb, A ],
            },
            {
                name: 'B',
                notes: [ B, Db, D, E, Gb, G, Bb ],
            },
            {
                name: 'C',
                notes: [ C, D, Eb, F, G, Ab, B ],
            },
            {
                name: 'D♭',
                notes: [ Db, Eb, E, Gb, Ab, A, C ],
            },
            {
                name: 'D',
                notes: [ D, E, F, G, A, Bb, Db ],
            },
            {
                name: 'E♭',
                notes: [ Eb, F, Gb, Ab, Bb, B, D ],
            },
            {
                name: 'E',
                notes: [ E, Gb, G, A, B, C, Eb ],
            },
            {
                name: 'F',
                notes: [ F, G, Ab, Bb, C, Db, E ],
            },
            {
                name: 'G♭',
                notes: [ Gb, Ab, A, B, Db, D, F ],
            },
            {
                name: 'G',
                notes: [ G, A, Bb, C, D, Eb, Gb ],
            },
        ]
    },
    {
        name: 'Minor Pentatonic',
        notesBeforeTonic: 5,
        scales: [
            {
                name: 'Ab',
                notes: [ Ab, B, Db, Eb, Gb ],
            },
            {
                name: 'A',
                notes: [ A, C, D, E, G ],
            },
            {
                name: 'Bb',
                notes: [ Bb, Db, Eb, F, Ab ],
            },
            {
                name: 'B',
                notes: [ B, D, E, Gb, A ],
            },
            {
                name: 'C',
                notes: [ C, Eb, F, G, Bb ],
            },
            {
                name: 'Db',
                notes: [ Db, E, Gb, Ab, B ],
            },
            {
                name: 'D',
                notes: [ D, F, G, A, C ],
            },
            {
                name: 'Eb',
                notes: [ Eb, Gb, Ab, Bb, Db ],
            },
            {
                name: 'E',
                notes: [ E, G, A, B, D ],
            },
            {
                name: 'F',
                notes: [ F, Ab, Bb, C, Eb ],
            },
            {
                name: 'Gb',
                notes: [ Gb, A, B, Db, E ],
            },
            {
                name: 'G',
                notes: [ G, Bb, C, D, F ],
            },
        ]
    },
    {
        name: 'Major Pentatonic',
        notesBeforeTonic: 5,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, Bb, C, Eb, F ],
            },
            {
                name: 'A',
                notes: [ A, B, Db, E, Gb ],
            },
            {
                name: 'B♭',
                notes: [ Bb, C, D, F, G ],
            },
            {
                name: 'B',
                notes: [ B, Db, Eb, Gb, Ab ],
            },
            {
                name: 'C',
                notes: [ C, D, E, G, A ],
            },
            {
                name: 'D♭',
                notes: [ Db, Eb, F, Ab, Bb ],
            },
            {
                name: 'D',
                notes: [ D, E, Gb, A, B ],
            },
            {
                name: 'E♭',
                notes: [ Eb, F, G, Bb, C ],
            },
            {
                name: 'E',
                notes: [ E, Gb, Ab, B, Db ],
            },
            {
                name: 'F',
                notes: [ F, G, A, C, D ],
            },
            {
                name: 'G♭',
                notes: [ Gb, Ab, Bb, Db, Eb ],
            },
            {
                name: 'G',
                notes: [ G, A, B, D, E ],
            },
        ]
    },
    {
        name: 'Minor Pentatonic Blues',
        notesBeforeTonic: 6,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, B, Db, D, Eb, Gb ],
            },
            {
                name: 'A',
                notes: [ A, C, D, Eb, E, G ],
            },
            {
                name: 'B♭',
                notes: [ Bb, Db, Eb, E, F, Ab ],
            },
            {
                name: 'B',
                notes: [ B, D, E, F, Gb, A ],
            },
            {
                name: 'C',
                notes: [ C, Eb, F, Gb, G, Bb ],
            },
            {
                name: 'D♭',
                notes: [ Db, E, Gb, G, Ab, B ],
            },
            {
                name: 'D',
                notes: [ D, F, G, Ab, A, C ],
            },
            {
                name: 'E♭',
                notes: [ Eb, Gb, Ab, A, Bb, Db ],
            },
            {
                name: 'E',
                notes: [ E, G, A, Bb, B, D ],
            },
            {
                name: 'F',
                notes: [ F, Ab, Bb, B, C, Eb ],
            },
            {
                name: 'G♭',
                notes: [ Gb, A, B, C, Db, E ],
            },
            {
                name: 'G',
                notes: [ G, Bb, C, Db, D, F ],
            },
        ]
    },
    {
        name: 'Major Pentatonic Blues',
        notesBeforeTonic: 6,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, Bb, B, C, Eb, F ],
            },
            {
                name: 'A',
                notes: [ A, B, C, Db, E, Gb ],
            },
            {
                name: 'B♭',
                notes: [ Bb, C, Db, D, F, G ],
            },
            {
                name: 'B',
                notes: [ B, Db, D, Eb, Gb, Ab ],
            },
            {
                name: 'C',
                notes: [ C, D, Eb, E, G, A ],
            },
            {
                name: 'D♭',
                notes: [ Db, Eb, E, F, Ab, Bb ],
            },
            {
                name: 'D',
                notes: [ D, E, F, Gb, A, B ],
            },
            {
                name: 'E♭',
                notes: [ Eb, F, Gb, G, Bb, C ],
            },
            {
                name: 'E',
                notes: [ E, Gb, G, Ab, B, Db ],
            },
            {
                name: 'F',
                notes: [ F, G, Ab, A, C, D ],
            },
            {
                name: 'G♭',
                notes: [ Gb, Ab, A, Bb, Db, Eb ],
            },
            {
                name: 'G',
                notes: [ G, A, Bb, B, D, E ],
            },
        ]
    },
    {
        name: 'Major Bebop',
        notesBeforeTonic: 6,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, Bb, C, Db, Eb, E, F, G ],
            },
            {
                name: 'A',
                notes: [ A, B, Db, D, E, F, Gb, Ab ],
            },
            {
                name: 'B♭',
                notes: [ Bb, C, D, Eb, F, Gb, G, A ],
            },
            {
                name: 'B',
                notes: [ B, Db, Eb, E, Gb, G, Ab, Bb ],
            },
            {
                name: 'C',
                notes: [ C, D, E, F, G, Ab, A, B ],
            },
            {
                name: 'D♭',
                notes: [ Db, Eb, F, Gb, Ab, A, Bb, C ],
            },
            {
                name: 'D',
                notes: [ D, E, Gb, G, A, Bb, B, Db ],
            },
            {
                name: 'E♭',
                notes: [ Eb, F, G, Ab, Bb, B, C, D ],
            },
            {
                name: 'E',
                notes: [ E, Gb, Ab, A, B, C, Db, Eb ],
            },
            {
                name: 'F',
                notes: [ F, G, A, Bb, C, Db, D, E ],
            },
            {
                name: 'G♭',
                notes: [ Gb, Ab, Bb, B, Db, D, Eb, F ],
            },
            {
                name: 'G',
                notes: [ G, A, B, C, D, Eb, E, Gb ],
            },
        ]
    },
    {
        name: 'Minor Bebop',
        notesBeforeTonic: 6,
        scales: [
            {
                name: 'A♭',
                notes: [ Ab, Bb, B, C, Db, Eb, F, Gb ],
            },
            {
                name: 'A',
                notes: [ A, B, C, Db, D, E, Gb, G ],
            },
            {
                name: 'B♭',
                notes: [ Bb, C, Db, D, Eb, F, G, Ab ],
            },
            {
                name: 'B',
                notes: [ B, Db, D, Eb, E, Gb, Ab, A ],
            },
            {
                name: 'C',
                notes: [ C, D, Eb, E, F, G, A, Bb ],
            },
            {
                name: 'D♭',
                notes: [ Db, Eb, E, F, Gb, Ab, Bb, B ],
            },
            {
                name: 'D',
                notes: [ D, E, F, Gb, G, A, B, C ],
            },
            {
                name: 'E♭',
                notes: [ Eb, F, Gb, G, Ab, Bb, C, Db ],
            },
            {
                name: 'E',
                notes: [ E, Gb, G, Ab, A, B, Db, D ],
            },
            {
                name: 'F',
                notes: [ F, G, Ab, A, Bb, C, D, Eb ],
            },
            {
                name: 'G♭',
                notes: [ Gb, Ab, A, Bb, B, Db, Eb, E ],
            },
            {
                name: 'G',
                notes: [ G, A, Bb, B, C, D, E, F ],
            },
        ]
    },
    {
        name: 'Super Locrian',
        notesBeforeTonic: 6,
        scales: [
            {
                name: 'C',
                notes: [ C, Db, Eb, E, Gb, Ab, Bb ],
            },
            {
                name: 'D♭',
                notes: [ Db, D, E, F, G, A, B ],
            },
            {
                name: 'D',
                notes: [ D, Eb, F, Gb, Ab, Bb, C ],
            },
            {
                name: 'E♭',
                notes: [ Eb, E, Gb, G, A, B, Db ],
            },
            {
                name: 'E',
                notes: [ E, F, G, Ab, Bb, C, D ],
            },
            {
                name: 'F',
                notes: [ F, Gb, Ab, A, B, Db, Eb ],
            },
            {
                name: 'G♭',
                notes: [ Gb, G, A, Bb, C, D, E ],
            },
            {
                name: 'G',
                notes: [ G, Ab, Bb, B, Db, Eb, F ],
            },
            {
                name: 'A♭',
                notes: [ Ab, A, B, C, D, E, Gb ],
            },
            {
                name: 'A',
                notes: [ A, Bb, C, Db, Eb, F, G ],
            },
            {
                name: 'B♭',
                notes: [ Bb, B, Db, D, E, Gb, Ab ],
            },
            {
                name: 'B',
                notes: [ B, C, D, Eb, F, G, A ],
            },
        ]
    },
];