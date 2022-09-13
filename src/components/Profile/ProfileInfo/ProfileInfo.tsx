import React from "react";
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus'


type ProfileInfoType = {
    img: string
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return (
        <>
            <div className={s.main}>
                <img src={props.img}/>
            </div>
            <div>
                {/*<img src={props.profile.photos.large}/>*/}
                {props.profile && <img src={props.profile.photos.small}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </>
    )
}