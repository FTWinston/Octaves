import { useState } from 'react';
import classes from './App.module.css';
import { determineNotes } from './functionality/determineNotes';
import { scaleTypes } from './functionality/Scales';
import { voices } from './functionality/Voices';
import { Player } from './Player';

export const App = () => {
    const scaleType = scaleTypes[0];
    const scale = scaleType.scales[5];
    const keyName = `${scale.name} ${scaleType.name}`;
    const voice = voices[0];

    const notes = [
        determineNotes(scale, scaleType, 3),
        determineNotes(scale, scaleType, 4),
        determineNotes(scale, scaleType, 5)
    ]

    const [showPlayer, setShowPlayer] = useState(false);

    const content = showPlayer
        ? <Player keyName={keyName} notes={notes} voice={voice} />
        : <button className={classes.startButton} onClick={() => setShowPlayer(true)}>Start</button>;

    return (
        <div className={classes.app}>
            {content}
        </div>
    );
}
