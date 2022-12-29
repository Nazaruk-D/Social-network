import React from 'react';
import s from "./Preloader.module.scss"
import gif from "../../../assets/gif/gif5.gif";
import gif2 from "../../../assets/gif/gif3.gif";

type PreloaderType = {
    type?: string
}

export const Preloader: React.FC<PreloaderType> = ({type}) => {
    return (
        <div className={s.loading}>
            <div className={s.backgroundPreloader}>
                <div className={s.vision2}></div>
                {type === "start"
                    ? <img src={gif} alt="loading..." className={s.crazySun}/>
                    : <img src={gif2} alt="loading..." className={s.crazySun}/>
                }
                <div className={s.vision}></div>
            </div>
        </div>
    );
};

