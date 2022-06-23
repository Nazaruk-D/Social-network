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
            <div className={s.item}>
                <a href="">{props.profile}</a>
            </div>
            <div className={s.item}>
                <a href="">{props.message}</a>
            </div>
            <div className={s.item}>
                <a href="">{props.news}</a>
            </div>
            <div className={s.item}>
                <a href="">{props.music}</a>
            </div>
            <div className={s.item}>
                <a href="">{props.settings}</a>
            </div>
        </nav>
    )}