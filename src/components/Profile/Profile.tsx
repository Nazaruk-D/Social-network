import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataPropsType} from "../../redux/state";


type ProfileTypeProps = {
    postData: postDataPropsType[]
    addPost: () => void
    updateNewPostText: (message: string) => void
    newPostText: string
}

export const Profile: React.FC<ProfileTypeProps> = (props) => {

    return (<div className={s.profile}>
        <ProfileInfo
            img={"https://www.eurohandball.com/media/f0rhclep/microsoftteams-image-267.png?center=0.40662327708788731,0.27796471311115661&mode=crop&width=1980&height=768&rnd=132863759739570000"}/>
        <MyPosts postData={props.postData}
                 addPost={props.addPost}
                 newPostText={props.newPostText}
                 updateNewPostText={props.updateNewPostText}
        />
    </div>);
}

