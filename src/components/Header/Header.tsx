import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    img: string
    isAuth: boolean
    login: null | string
}

export const Header: React.FC<HeaderPropsType> = ({img, login, isAuth}) => {
    return (<div className={s.header}>
        <header>
            <img src={img} className={s.img}/>
            <div className={s.loginBlock}>
                {isAuth
                    ? login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    </div>);
}


