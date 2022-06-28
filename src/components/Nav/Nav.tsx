import React from "react";
import s from "./Nav.module.css";


type NavPropsType = {
    profile: string,
    message: string,
    news: string,
    music: string,
    settings: string
}

export const Nav: React.FC<NavPropsType> = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.block}>
                <div className={s.btn}>
                    <a href="/profile">{props.profile}</a>
                </div>
                <div className={s.btn}>
                    <a href="/dialogs">{props.message}</a>
                </div>
                <div className={s.btn}>
                    <a href="/news">{props.news}</a>
                </div>
                <div className={s.btn}>
                    <a href="/music">{props.music}</a>
                </div>
                <div className={s.btn}>
                    <a href="/settings">{props.settings}</a>
                </div>
            </div>
        </nav>
    )
}