import React from 'react';
import s from "./NavBar.module.scss";
import {Nav} from "./Nav/Nav";
import Stone from "./Stone/Stone";

const NavBar = () => {
    return (
        <div className={s.nav}>
            <Nav/>
            <Stone/>
        </div>
    );
};

export default NavBar;