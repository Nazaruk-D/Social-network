import React from "react";
import s from "./Header.module.css";

type HeaderPropsType = {
    img: string
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (<div className={s.header}>
        <header>
            <img src={props.img} className={s.img}/>
        </header>
    </div>);
}


