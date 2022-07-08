import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {dialogsDataProps} from "../../redux/state";
import {Friends} from "./Friends/Friends";


type NavPropsType = {
    profile: string
    message: string
    news: string
    music: string
    settings: string
    friends: friendsTypeProps[]
}

type friendsTypeProps = {
    ava: string
    name: string
    id: string
}

export const Nav: React.FC<NavPropsType> = (props) => {
    let friendsElements = props.friends.map(f =>  <span key={f.id}><Friends name={f.name} ava={f.ava}/></span>)
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
                <div className={s.friends}>
                    <h3>Friends</h3>
                    {friendsElements}
                    <img src="" alt=""/>
                </div>
            </div>
        </nav>
    )
}