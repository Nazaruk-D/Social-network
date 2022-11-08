import React from "react";
import s from "./FriendsList.module.scss";
import {NavLink} from "react-router-dom";

type FriendsListProps = {
    name: string
    id: string
    ava: string
}

export const FriendsList: React.FC<FriendsListProps > = (props) => {
    return (
        <div className={s.block}>
            <NavLink to={"/dialogs/" + props.id}>
                <table>
                    <tbody>
                    <tr>
                        <td><img src={props.ava} className={s.ava} alt=""/></td>
                        <td className={s.nameTd}>{props.name}</td>
                    </tr>
                    </tbody>
                </table>
            </NavLink>
        </div>
    )
}