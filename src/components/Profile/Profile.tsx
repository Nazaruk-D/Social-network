import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export const Profile = () => {

    return (<div className={s.profile}>
        <ProfileInfo img={"https://www.eurohandball.com/media/f0rhclep/microsoftteams-image-267.png?center=0.40662327708788731,0.27796471311115661&mode=crop&width=1980&height=768&rnd=132863759739570000"}/>
        <MyPosts/>
    </div>);
}

