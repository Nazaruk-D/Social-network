import React from "react";
import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";

type friendsPropsType = {
    ava: string
    name: string
}


export const Friends: React.FC<friendsPropsType> = (props) => {
    return (
        <div>
            <div>
                <img src={props.ava} className={s.ava}></img>
                <div className={s.text}>{props.name}</div>
            </div>
        </div>
    )
}