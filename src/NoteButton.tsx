import { INote } from './functionality/Notes';
import { IVoice } from './functionality/Voices';
import classes from './NoteButton.module.css';

interface Props {
    note: INote;
    voice: IVoice;
    start: () => void;
    stop: () => void;
    className?: string;
}

export const NoteButton: React.FC<Props> = (props) => {
    const className = props.className
        ? `${classes.button} ${props.className}`
        : classes.button;

    return (
        <button
            className={className}
            onTouchStart={props.start}
            onTouchEnd={props.stop}
            onTouchCancel={props.stop}
            onMouseDown={props.start}
            onMouseUp={props.stop}
        >
            <span className={classes.noteName}>{props.note.name}<sub className={classes.octaveNumber}>{props.note.octave}</sub></span>
        </button>
    );
}