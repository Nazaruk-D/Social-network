import React, {FC, useEffect, useRef, useState} from 'react';
import s from './Player.module.scss'
import './m.scss'
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
                                         songs,
                                         isPlaying,
                                         setIsPlaying,
                                         audioElem,
                                         currentSong,
                                         setCurrentSong,
                                         setRepeat, repeat, setRandom, random
                                     }) => {

    const clickRef: any = useRef();
    const [sec, setSec] = useState("0:00")

    //player action button
    const playPause = () => {
        setIsPlaying(!isPlaying)
    }

    const skipBack = () => {
        debugger
        const index = songs.findIndex(x => x.name === currentSong.name)
        if (random) {
            setCurrentSong(songs[randomSongIndex()])
        } else if (index === 0) {
            debugger
            setCurrentSong(songs[songs.length - 1])
        } else {
            debugger
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
            debugger
            setCurrentSong(songs[0])
        } else {
            debugger
            setCurrentSong(songs[index + 1])
        }
        audioElem.current.currentTime = 0;
        setIsPlaying(true)
    }


    //Progress bar length
    const checkWidth = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let width = clickRef.current.clientWidth
        const offset = e.nativeEvent.offsetX
        const divProgress = offset / width * 100
        audioElem.current.currentTime = divProgress / 100 * currentSong.length
    }

    useEffect(() => {
        const index = songs.findIndex(x => x.name === currentSong.name)
        if (currentSong.progress === 100) {
            audioElem.current.currentTime = 0;
            if (repeat) {
                setCurrentSong(currentSong)
            } else if (random) {
                setCurrentSong(songs[randomSongIndex()])
            } else if (index === songs.length - 1) {
                debugger
                setCurrentSong(songs[0])
            } else {
                setCurrentSong(songs[index + 1])
            }
        }
    }, [currentSong.progress])


//If necessary, loop the track, I could not find a simpler way out of the situation than the one that is written below.
// All the rest didn't give the option to automatically turn on after the song ended.
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
        // const currentTime = Math.ceil(audioElem.current.currentTime)
        // foo(currentTime)
        const currentTime = Math.ceil(audioElem.current.currentTime)
        if (currentTime < 60) {
            if (currentTime < 10) {
                setSec("0:0" + currentTime)
            } else {
                setSec("0:" + currentTime)
            }
        } else if (currentTime >= 60 && currentTime < 120) {
            const oneMin = currentTime - 60
            if (oneMin < 10) {
                setSec("1:0" + oneMin)
            } else {
                setSec("1:" + oneMin)
            }
        } else if (currentTime >= 120 && currentTime < 180) {
            const twoMin = currentTime - 120
            if (twoMin < 10) {
                setSec("2:0" + twoMin)
            } else {
                setSec("2:" + twoMin)
            }
        } else if (currentTime >= 180 && currentTime < 240) {
            const threeMin = currentTime - 180
            if (threeMin < 10) {
                setSec("3:0" + threeMin)
            } else {
                setSec("3:" + threeMin)
            }
        } else {
            setSec("0:00")
        }
    }, [currentSong.progress])


    const repeatSong = () => {
        setRepeat(!repeat)
        setRandom(false)
    }

    const randomSong = () => {
        setRandom(!random)
        setRepeat(false)
    }

    const randomSongIndex = () => {
        return Math.floor(Math.random() * (songs.length))
    }

    const isRepeat = repeat ? {color: "cyan"} : {}
    const isRandom = random ? {color: "cyan"} : {}

    return (
        <div className={s.playerContainer}>
            <div className="container">
                <header className={s.header}>
                    <div className="playlist">
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="setting">
                        <i className="fa fa-cog"></i>
                    </div>
                </header>
                <main className={s.main}>
                    <div className="album-art">
                        <img className={s.img}
                             src={currentSong.img} alt=""/>
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
                <footer className={s.footer}>
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