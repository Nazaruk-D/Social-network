import React, {FC, useEffect, useRef, useState} from 'react';
import s from './Player.module.scss'
import './m.scss'
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import {AiOutlineBackward} from "react-icons/ai";
import {AiOutlineForward} from "react-icons/ai";
import {FaRandom} from "react-icons/fa";
import {TbRepeat} from "react-icons/tb";

type songs = {
    img: string
    name: string
    music: string
    progress?: number
    length?: any
}

type PlayerPropsType = {
    songs: songs[]
    setSongs: (songs: songs[]) => void
    isPlaying: boolean
    setIsPlaying: (isPlaying: boolean) => void
    audioElem: any
    currentSong: songs
    setCurrentSong: (currentSong: songs) => void
}

const Player: FC<PlayerPropsType> = ({
                                         songs,
                                         setSongs,
                                         isPlaying,
                                         setIsPlaying,
                                         audioElem,
                                         currentSong,
                                         setCurrentSong
                                     }) => {

    const clickRef: any = useRef();

    //player action button
    const playPause = () => {
        setIsPlaying(!isPlaying)
    }
    const skipBack = () => {
        const index = songs.findIndex(x => x.name === currentSong.name)
        if (index === 0) {
            setCurrentSong(songs[songs.length - 1])
        } else {
            setCurrentSong(songs[index - 1])
        }
        audioElem.current.currentTime = 0;
    }
    const skipNext = () => {
        const index = songs.findIndex(x => x.name === currentSong.name)
        if (index === songs.length - 1) {
            setCurrentSong(songs[0])
        } else {
            setCurrentSong(songs[index + 1])
        }
        audioElem.current.currentTime = 0;
    }
    const [sec, setSec] = useState("0:00")


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
            if (index === songs.length - 1) {
                debugger
                setCurrentSong(songs[0])
                setIsPlaying(true)
                setIsPlaying(true)

            } else {
                setCurrentSong(songs[index + 1])
                setIsPlaying(true)
                setIsPlaying(true)

            }
        }
    }, [currentSong.progress])
    useEffect(() => {
        const currentTime = Math.ceil(audioElem.current.currentTime)
        if (currentTime < 60) {
            if (currentTime < 10) {
                setSec("0:0" + currentTime)
            } else {
                setSec("0:" + currentTime)
            }
        } else if (currentTime >= 60) {
            if (currentTime < 10) {
                setSec("1:0" + currentTime)
            } else {
                setSec("1:" + currentTime)
            }
        } else if (currentTime >= 120) {
            if (currentTime < 10) {
                setSec("2:0" + currentTime)
            } else {
                setSec("2:" + currentTime)
            }
        } else if (currentTime >= 180) {
            if (currentTime < 10) {
                setSec("3:0" + currentTime)
            } else {
                setSec("3:" + currentTime)
            }
        } else {
            setSec("0:00")
        }
    }, [currentSong.progress])

    // console.log("test")
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
                        <i className="fa fa-repeat" onClick={() => {
                        }}><TbRepeat/></i>
                        <i className="fa fa-fast-backward" onClick={skipBack}><AiOutlineBackward/></i>
                        {isPlaying
                            ? <i className="fa fa-play" onClick={playPause}><BsPauseFill/></i>
                            : <i className="fa fa-play" onClick={playPause}><BsFillPlayFill/></i>
                        }
                        <i className="fa fa-fast-forward" onClick={skipNext}><AiOutlineForward/></i>
                        <i className="fa fa-random" onClick={() => {
                        }}><FaRandom/></i></div>
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