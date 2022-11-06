import React, {useEffect, useRef, useState} from 'react';
import s from './Music.module.scss'
import './m.scss'
import Player from "./Player";


export const Music = () => {

    const musicList = [
        {
            img: "https://upload.wikimedia.org/wikipedia/ru/2/28/Rick_and_Morty_Season_5.jpg",
            name: "Rick and Morty",
            music: "https://instrumentalfx.co/wp-content/upload/11/Rick-and-Morty-Theme-Song.mp3",
            progress: 0,
            length: null
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/ru/2/28/Rick_and_Morty_Season_5.jpg",
            name: "Rick",
            music: "https://instrumentalfx.co/wp-content/upload/11/Rick-and-Morty-Theme-Song.mp3"
        }
    ]

    const [songs, setSongs] = useState(musicList)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(musicList[0])
    const audioElem: any = useRef()

    const onTimeUpdating = () => {
        const duration = audioElem.current.duration
        const currentTime = audioElem.current.currentTime
        setCurrentSong({...currentSong, "progress": currentTime / duration * 100, "length": duration})
    }

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    }, [isPlaying])

    return (
        <div className={s.musicContainer}>
            <audio src={currentSong.music} ref={audioElem} onTimeUpdate={onTimeUpdating}/>
            <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
                    audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
        </div>
    );
};
