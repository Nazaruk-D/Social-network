import React from "react";
import s from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {ProfileDataTypeServer} from "../../api/profileAPI";

type ProfileTypeProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    authId: number | null
    updateProfileData: (data: ProfileDataTypeServer, userId: string) => void
}

export const Profile: React.FC<ProfileTypeProps> = (props) => {
    if (!props.profile) {
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
                authId={props.authId}
                updateProfileData={props.updateProfileData}
            />
            <MyPostsContainer/>
        </div>);
}

