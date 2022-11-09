import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {MainButton} from "../common/MainButton/MainButton";


type NavPropsType = {}

export const Nav: React.FC<NavPropsType> = (props) => {
    return (
        <nav className={s.nav}>
                <NavLink to="/profile" activeClassName={s.activeLink}>
                    <MainButton buttonName={"Profile"}/>
                </NavLink>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>
                    <MainButton buttonName={"Message"}/>
                </NavLink>
                <NavLink to="/news" activeClassName={s.activeLink}>
                    <MainButton buttonName={"News"}/>
                </NavLink>
                <NavLink to="/users" activeClassName={s.activeLink}>
                    <MainButton buttonName={"Users"}/>
                </NavLink>
                <NavLink to="/music" activeClassName={s.activeLink}>
                    <MainButton buttonName={"Music"}/>
                </NavLink>
                <NavLink to="/settings" activeClassName={s.activeLink}>
                    <MainButton buttonName={"Settings"}/>
                </NavLink>
        </nav>
    )
}