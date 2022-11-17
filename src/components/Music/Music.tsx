import React, {useEffect, useRef, useState} from 'react';
import s from './Music.module.scss'
import './m.scss'
import Player from "./Player";


export const Music = () => {

    const musicList = [
        {
            img: "https://upload.wikimedia.org/wikipedia/ru/2/28/Rick_and_Morty_Season_5.jpg",
            name: "Rick and Morty intro",
            music: "https://now.morsmusic.org/load/2049526821/Rick_and_Morty_Ryan_Elder_-_Rick_and_Morty_Theme_(musmore.com).mp3",
            progress: 0,
            length: null
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/ru/2/28/Rick_and_Morty_Season_5.jpg",
            name: "Goodbye Moonmen",
            music: "https://now.morsmusic.org/load/2097748058/Rick_and_Morty_Jemaine_Clement_Ryan_Elder_-_Goodbye_Moonmen_(musmore.com).mp3"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/ru/2/28/Rick_and_Morty_Season_5.jpg",
            name: "Raised Up (C-131)",
            music: "https://now.morsmusic.org/load/1758858123/Rick_and_Morty_Justin_Roiland_Ryan_Elder_-_Raised_Up_C-131_(musmore.com).mp3"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/ru/2/28/Rick_and_Morty_Season_5.jpg",
            name: "Help Me I'm Gonna Die",
            music: "https://now.morsmusic.org/load/2046910150/Rick_and_Morty_Justin_Roiland_Ryan_Elder_-_Help_Me_Im_Gonna_Die_(musmore.com).mp3"
        },
    ]

    const [songs, setSongs] = useState(musicList)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(musicList[0])
    const [repeat, setRepeat] = useState(false)
    const [random, setRandom] = useState(false)
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
            <audio src={currentSong.music} ref={audioElem} onTimeUpdate={onTimeUpdating} autoPlay/>
            <Player songs={songs} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
                    audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} setRepeat={setRepeat} repeat={repeat}
                    setRandom={setRandom} random={random}/>
        </div>
    );
};
