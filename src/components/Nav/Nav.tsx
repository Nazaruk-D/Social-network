import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {CucumberButton} from "../common/CucumberButton/CucumberButton";


type NavPropsType = {

    // friends: friendsTypeProps[]
}

type friendsTypeProps = {
    ava: string
    name: string
    id: string
}

export const Nav: React.FC<NavPropsType> = (props) => {
    // let friendsElements = props.friends.map(f =>  <span key={f.id}><Friends name={f.name} ava={f.ava}/></span>)
    return (
        <nav className={s.nav}>
                {/*<div className={s.item}>*/}
                <NavLink to="/profile" activeClassName={s.activeLink}>
                    <CucumberButton buttonName={"Profile"}/>
                </NavLink>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>
                    <CucumberButton buttonName={"Message"}/>
                </NavLink>
                <NavLink to="/news" activeClassName={s.activeLink}>
                    <CucumberButton buttonName={"News"}/>
                </NavLink>
                <NavLink to="/users" activeClassName={s.activeLink}>
                    <CucumberButton buttonName={"Users"}/>
                </NavLink>
                <NavLink to="/music" activeClassName={s.activeLink}>
                    <CucumberButton buttonName={"Music"}/>
                </NavLink>
                <NavLink to="/settings" activeClassName={s.activeLink}>
                    <CucumberButton buttonName={"Settings"}/>
                </NavLink>
                {/*<div className={s.friends}>*/}
                {/*    <h3>Friends</h3>*/}
                {/*    /!*{friendsElements}*!/*/}
                {/*    <img src="" alt=""/>*/}
                {/*</div>*/}
        </nav>
    )
}