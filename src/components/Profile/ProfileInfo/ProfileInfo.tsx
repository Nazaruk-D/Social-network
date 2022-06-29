import React from "react";
import s from "./ProfileInfo.module.css";
import {MyPosts} from "../Myposts/MyPosts";


type ProfileInfoType = {
    img: string

}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return (
        <>
            <div className={s.main}>
                <img src={props.img}/>
            </div>
        </>
    )
}