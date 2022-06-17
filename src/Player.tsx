import { useEffect, useState } from 'react';
import { Audio } from './functionality/Audio';
import { INote } from './functionality/Notes';
import { IVoice } from './functionality/Voices';
import { NoteButton } from './NoteButton';
import classes from './Player.module.css';

interface KeySignature {
    name: string;
    notes: INote[][];
}

interface Props {
    keySignatures: KeySignature[];
    voice: IVoice;
}

export const Player: React.FC<Props> = (props) => {
    const [audio] = useState(() => new Audio());
    const [keyNumber, setKeyNumber] = useState(() => props.keySignatures.findIndex(sig => sig.notes[0][0].name === 'C'));
    const { voice } = props;

    const { 
        name: keySignature,
        notes,
    } = props.keySignatures[keyNumber];

    useEffect(() => {
        audio.setVoice(voice);
        audio.setVolume(1);

        return () => audio.stopAll();
    }, [audio, voice]);

    const buttonRows = notes.map((octave, rowNum) => <div className={classes.noteButtonRow} key={rowNum}>{
        octave.map((note, noteNum) => {
            const index = notes[0].length * rowNum + noteNum;

            return (
                <NoteButton
                    key={noteNum}
                    note={note}
                    start={() => audio.start(index, note.frequency)}
                    stop={() => audio.stop(index)}
                    voice={props.voice}
                />
            );
        })
    }</div>);

    return (
        <div className={classes.root}>
            <div className={classes.controls}>
                <button className={classes.controlButton} onClick={() => setKeyNumber(current => current === 0 ? props.keySignatures.length - 1 : current - 1)}>
                    &lt;
                </button>
                <button className={classes.controlButton} onClick={() => setKeyNumber(current => current === props.keySignatures.length - 1 ? 0 : current + 1)}>
                    &gt;
                </button>
            </div>
            <div className={classes.noteButtons}>
                {buttonRows}
            </div>
        </div>
    )
}