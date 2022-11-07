import React from "react";
import s from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {MoonLoader} from "react-spinners";
import {Preloader} from "../common/Preloader/Preloader";

type ProfileTypeProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    // photo: string | null
}

export const Profile: React.FC<ProfileTypeProps> = (props) => {
    if (!props.profile) {
        // return <MoonLoader color={"#b70000"} size={50}/>
        return <Preloader/>
    }
    return (
        <div className={s.profileContainer}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                // photo={props.photo}
            />
            <MyPostsContainer/>
        </div>);
}

