import React from "react";
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../assets/images/user.png'


type ProfileInfoType = {
    img: string
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    const mainPhotoSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files![0]) {
            props.savePhoto(e.target.files![0])
        }

    }

    return (
        <>
            <div className={s.main}>
                <img src={props.img}/>
            </div>
            <div>
                {/*<img src={props.profile.photos.large}/>*/}
                {/*{props.profile && <img src={props.profile.photos.small}/>}*/}
                <img src={props.profile?.photos.small || userPhoto}/>
                {props.isOwner && <input type="file" onChange={mainPhotoSelectedHandler}/>}
                {/*{props.isOwner && <input type="file" onChange={(e) => mainPhotoSelectedHandler(e)}/>}*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </>
    )
}