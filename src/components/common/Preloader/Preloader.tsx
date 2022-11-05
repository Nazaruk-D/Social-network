import React from 'react';
import s from "./Preloader.module.scss"
import gif from "../../../assets/gif/gif5.gif";

export const Preloader = () => {
    return (
        <div className={s.loading}>
            <div className={s.backgroundPreloader}>
                <img src={gif} alt="loading..." className={s.crazySun}/>
            </div>
        </div>
    );
};

