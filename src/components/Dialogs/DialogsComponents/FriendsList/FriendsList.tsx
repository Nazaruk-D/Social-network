import React from "react";
import s from "./FriendsList.module.scss";
import {NavLink} from "react-router-dom";

type FriendsListProps = {
    name: string
    id: string
    ava: string
}

export const FriendsList: React.FC<FriendsListProps> = (props) => {
    return (
        <div className={s.friendBlock}>
                <NavLink to={"/dialogs/" + props.id} className={s.friend}>
                    <img src={props.ava} className={s.ava} alt=""/>
                    <div className={s.nameTd}>{props.name}</div>
                </NavLink>
        </div>
    )
}