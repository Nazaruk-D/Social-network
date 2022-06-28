import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";


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
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>{props.profile}</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>{props.message}</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>{props.news}</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>{props.music}</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>{props.settings}</NavLink>
                </div>
            </div>
        </nav>
    )
}