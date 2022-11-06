import React from 'react';
import s from './Music.module.scss'


export const Music = () => {
    return (
        <div className={s.musicContainer}>
            <div className={s.audioBlock}>
                <div>
                    Hey
                </div>
                <audio controls >
                    {/*<source src="music.ogg" type="audio/ogg"/>*/}
                </audio>
            </div>
        </div>
    );
};
