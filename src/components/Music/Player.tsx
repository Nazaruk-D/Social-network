import React, {FC, useEffect, useRef, useState} from 'react';
import s from './Player.module.scss'
import './playerStyles.scss'
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import {AiOutlineBackward} from "react-icons/ai";
import {AiOutlineForward} from "react-icons/ai";
import {FaRandom} from "react-icons/fa";
import {TbRepeat} from "react-icons/tb";


type PlayerPropsType = {
    songs: songs[]
    isPlaying: boolean
    setIsPlaying: (isPlaying: boolean) => void
    audioElem: any
    currentSong: songs
    setCurrentSong: (currentSong: songs) => void
    setRepeat: (repeat: boolean) => void
    repeat: boolean
    setRandom: (random: boolean) => void
    random: boolean
}
type songs = {
    img: string
    name: string
    music: string
    progress?: number
    length?: any
}

const Player: FC<PlayerPropsType> = ({
                                         songs, isPlaying, setIsPlaying, audioElem, currentSong,
                                         setCurrentSong, setRepeat, repeat, setRandom, random
                                     }) => {

    const clickRef: any = useRef();
    const [sec, setSec] = useState("0:00")

    //Player action button
    const playPause = () => {
        setIsPlaying(!isPlaying)
    }
    const skipBack = () => {
        const index = songs.findIndex(x => x.name === currentSong.name)
        if (random) {
            setCurrentSong(songs[randomSongIndex()])
        } else if (index === 0) {
            setCurrentSong(songs[songs.length - 1])
        } else {
            setCurrentSong(songs[index - 1])
        }
        audioElem.current.currentTime = 0;
        setIsPlaying(true)
    }
    const skipNext = () => {
        const index = songs.findIndex(x => x.name === currentSong.name)
        if (random) {
            setCurrentSong(songs[randomSongIndex()])
        } else if (index === songs.length - 1) {
            setCurrentSong(songs[0])
        } else {
            setCurrentSong(songs[index + 1])
        }
        audioElem.current.currentTime = 0;
        setIsPlaying(true)
    }
    const repeatSong = () => {
        setRepeat(!repeat)
        setRandom(false)
    }
    const randomSong = () => {
        setRandom(!random)
        setRepeat(false)
    }


    //Functions
    const randomSongIndex = () => {
        return Math.floor(Math.random() * (songs.length))
    }
    //Function for correct display of track time
    const minutesTimeTrack = (currentTime: number) => {
        const x = Math.ceil(currentTime / 60) - 1
        const y = Math.floor(currentTime / 60)
        const time = currentTime - (60 * y)
        if (time < 10) {
            setSec(`${y}:0` + time)
        } else {
            setSec(`${x}:` + time)
        }
    }
    //Progress bar length
    const checkWidth = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let width = clickRef.current.clientWidth
        const offset = e.nativeEvent.offsetX
        const divProgress = offset / width * 100
        audioElem.current.currentTime = divProgress / 100 * currentSong.length
    }


    //UseEffects
    //To automatically start playing the next song
    useEffect(() => {
        if (repeat && currentSong.progress === 100) {
            setTimeout(() => {
                setIsPlaying(!isPlaying)
            }, 100)
        }
        if (repeat && currentSong.progress === 0) {
            setTimeout(() => {
                setIsPlaying(true)
            }, 100)
        }
    }, [setCurrentSong, currentSong])
    useEffect(() => {
        const index = songs.findIndex(x => x.name === currentSong.name)
        if (currentSong.progress === 100) {
            audioElem.current.currentTime = 0;
            if (repeat) {
                setCurrentSong(currentSong)
            } else if (random) {
                setCurrentSong(songs[randomSongIndex()])
            } else if (index === songs.length - 1) {
                setCurrentSong(songs[0])
            } else {
                setCurrentSong(songs[index + 1])
            }
        }
    }, [currentSong.progress])
    // Show the time track
    useEffect(() => {
        const currentTime = Math.ceil(audioElem.current.currentTime)
        minutesTimeTrack(currentTime)
    }, [currentSong.progress])


    // Controlling button styles
    const isRepeat = repeat ? {color: "cyan"} : {}
    const isRandom = random ? {color: "cyan"} : {}


    return (
        <div className={s.playerContainer}>
            <div className={s.container}>
                <header className={s.header}></header>
                <main className={s.main}>
                    <div className={s.albumArt}>
                        <img className={s.img}
                             src={currentSong.img} alt="album picture"/>
                    </div>
                    <div className="player">
                        <i className="fa fa-repeat" style={isRepeat} onClick={repeatSong}><TbRepeat/></i>
                        <i className="fa fa-fast-backward" onClick={skipBack}><AiOutlineBackward/></i>
                        {isPlaying
                            ? <i className="fa fa-play" onClick={playPause}><BsPauseFill/></i>
                            : <i className="fa fa-play" onClick={playPause}><BsFillPlayFill/></i>
                        }
                        <i className="fa fa-fast-forward" onClick={skipNext}><AiOutlineForward/></i>
                        <i className="fa fa-random" style={isRandom} onClick={randomSong}><FaRandom/></i></div>
                </main>
                <footer className="footer">
                    <div className="title">{currentSong.name}</div>
                    <div className="time-tracker">
                        <div className="timer" onClick={checkWidth} ref={clickRef}>
                            <div className="bg">
                                <div className="bgSeekBar" style={{width: `${currentSong.progress + "%"}`}}></div>
                            </div>
                        </div>
                        <div className="time">{sec}</div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Player;