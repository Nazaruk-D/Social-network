import React from "react";
import s from "./FriendsList.module.scss";
import {NavLink} from "react-router-dom";

type FriendsListProps = {
    name: string
    id: string
    ava: string
}

export const FriendsList: React.FC<FriendsListProps> = ({name,ava,id}) => {
    return (
        <div className={s.friendBlock}>
                <NavLink to={"/dialogs/" + id} className={s.friend}>
                    <img src={ava} className={s.ava} alt="avatar"/>
                    <div className={s.nameTd}>{name}</div>
                </NavLink>
        </div>
    )
}