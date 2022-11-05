import React, {useState} from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import headerImg from '../../assets/png/header.png'
import loginPNG from '../../assets/png/Login.png'
import logoutPNG from '../../assets/png/Logout.png'

type HeaderPropsType = {
    isAuth: boolean
    login: null | string
    logout: () => void
}

export const Header: React.FC<HeaderPropsType> = ({login, isAuth,logout}) => {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const inputClass = !collapsed ? s.logPNG : s.xxx
    const onClickHandler = () => setCollapsed(!collapsed)

    return (
        <header className={s.header}>
            <img src={headerImg} className={s.img}/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div onClick={logout}><img onClick={onClickHandler} src={logoutPNG} alt="logoutPNG" className={inputClass}/></div>
                    : <NavLink to={'/login'} ><img onClick={onClickHandler} src={loginPNG} alt="loginPNG" className={inputClass}/></NavLink>
                }
            </div>
        </header>);
}


