import { octaves } from './Notes';
import { IScale, IScaleType } from './Scales';

export function determineNotes(scale: IScale, scaleType: IScaleType, octave: number) {
    let lastNoteIndex = -1;

    // Add a full scale of notes
    return scale.notes.map(noteIndex => {
        if (noteIndex < lastNoteIndex && octave < octaves.length - 1) {
            octave ++;
        }

        lastNoteIndex = noteIndex;

        return octaves[octave][noteIndex];
    });
}