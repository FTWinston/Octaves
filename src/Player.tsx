import { useEffect, useState } from 'react';
import { Audio } from './functionality/Audio';
import { INote } from './functionality/Notes';
import { IVoice } from './functionality/Voices';
import { NoteButton } from './NoteButton';
import classes from './Player.module.css';

interface Props {
    keyName: string;
    notes: INote[][];
    voice: IVoice;
}

export const Player: React.FC<Props> = (props) => {
    const [audio] = useState(() => new Audio());
    const { voice } = props;

    useEffect(() => {
        audio.setVoice(voice);
        audio.setVolume(1);

        return () => audio.stopAll();
    }, [audio, voice]);

    const buttonRows = props.notes.map((octave, rowNum) => <div className={classes.noteButtonRow} key={rowNum}>{
        octave.map((note, noteNum) => {
            const index = props.notes[0].length * rowNum + noteNum;

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
            {buttonRows}
        </div>
    )
}