import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {MoonLoader} from "react-spinners";

type ProfileTypeProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfileTypeProps> = (props) => {
    if(!props.profile){
        return <MoonLoader color={"#b70000"} size={50}/>
    }
    return (<div className={s.profile}>
        <ProfileInfo
            img={"https://www.eurohandball.com/media/f0rhclep/microsoftteams-image-267.png?center=0.40662327708788731,0.27796471311115661&mode=crop&width=1980&height=768&rnd=132863759739570000"}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
        <MyPostsContainer/>
    </div>);
}

