import React from "react";
import s from "./Header.module.css";

type HeaderType = {
    img: string
}

export const Header: React.FC<HeaderType> = (props) => {
    return (<div className={s.header}>
        <header>
            <img src={props.img} className={s.img}/>
        </header>
    </div>);
}


