import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {MenuButton} from "../../common/MenuButton/MenuButton";
import {routes} from "./routes";


type NavPropsType = {}

export const Nav: React.FC<NavPropsType> = (props) => {


    return (
        <nav className={s.nav}>
                <NavLink to={routes.profile} activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Profile"}/>
                </NavLink>
                <NavLink to={routes.dialogs} activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Message"}/>
                </NavLink>
                <NavLink to={routes.news} activeClassName={s.activeLink}>
                    <MenuButton buttonName={"News"}/>
                </NavLink>
                <NavLink to={routes.users} activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Users"}/>
                </NavLink>
                <NavLink to={routes.music} activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Music"}/>
                </NavLink>
                <NavLink to={routes.settings} activeClassName={s.activeLink}>
                    <MenuButton buttonName={"Settings"}/>
                </NavLink>
        </nav>
    )
}