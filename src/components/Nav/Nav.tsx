import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {MenuButton} from "../common/MenuButton/MenuButton";


type NavPropsType = {}

export const Nav: React.FC<NavPropsType> = (props) => {
    return (
        <nav className={s.nav}>
                <NavLink to="/profile" activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Profile"}/>
                </NavLink>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Message"}/>
                </NavLink>
                <NavLink to="/news" activeClassName={s.activeLink}>
                    <MenuButton buttonName={"News"}/>
                </NavLink>
                <NavLink to="/users" activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Users"}/>
                </NavLink>
                <NavLink to="/music" activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Music"}/>
                </NavLink>
                <NavLink to="/settings" activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Settings"}/>
                </NavLink>
        </nav>
    )
}