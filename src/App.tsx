import { useMemo, useState } from 'react';
import classes from './App.module.css';
import { determineNotes } from './functionality/determineNotes';
import { scaleTypes } from './functionality/Scales';
import { voices } from './functionality/Voices';
import { Player } from './Player';

export const App = () => {
    const voice = voices[0];

    const scaleType = scaleTypes[0];

    const keySignatures = useMemo(
        () => scaleType.scales.map(scale => ({
            name: `${scale.name} ${scaleType.name}`,
            notes: [
                determineNotes(scale, scaleType, 3),
                determineNotes(scale, scaleType, 4),
                determineNotes(scale, scaleType, 5)
            ]
        })),
        [scaleType]
    );

    const [showPlayer, setShowPlayer] = useState(false);

    const startClicked = () => {
        setShowPlayer(true);
        document.documentElement.requestFullscreen();
    };

    const content = showPlayer
        ? <Player keySignatures={keySignatures} voice={voice} />
        : <button className={classes.startButton} onClick={startClicked}>Start</button>;

    return (
        <div className={classes.app}>
            {content}
        </div>
    );
}
