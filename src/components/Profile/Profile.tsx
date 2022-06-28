import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./Myposts/MyPosts";


type ProfilePropType = {
    img: string,
}

export const Profile: React.FC<ProfilePropType> = (props) => {
    return (<div>
        <div>
            <img src={props.img} style={{width: "1000px", height: "300px"}} alt=""/>
        </div>
        <MyPosts/>
    </div>);
}


