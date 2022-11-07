import React, {FC, useState} from "react";
import s from "./ProfileInfo.module.scss";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../assets/images/user.png'
import {ProfileDataForm} from "./ProfileDataForm";
import uploadPhotoPNG from '../../../assets/png/uploadPhoto.png'
import {UploadPhoto} from "../../common/UploadPhoto/UploadPhoto";
import {getRandomArrayElement} from "../../Users/getRandomArrayElement";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    // photo: string | null
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({profile, isOwner, savePhoto, ...props}) => {

    const [editMode, setEditMode] = useState(false)

    const mainPhotoSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files![0]) {
            savePhoto(e.target.files![0])
            console.log(e.target.files![0])
        }
    }

    return (
        <div className={s.profileInfoContainer}>
            <div className={s.profileInfoBlock}>

                <div className={s.avatarBlock}>
                    {/*<img src={u.photos.small != null ? u.photos.small : getRandomArrayElement()} className={s.avatarImg}/>*/}
                    <div className={s.mainAvatar}>
                        <img src={profile?.photos.large !== null ? profile?.photos.large : getRandomArrayElement()} className={s.avatar}/>
                        <div className={s.updatePhoto}>
                            <UploadPhoto/>
                        </div>
                    </div>

                    {isOwner &&
                        <label htmlFor={"inputTag"}>
                            <div className={s.uploadPhotoBlock}>
                                <div className={s.supportText}>Click to upload photo</div>
                                <img src={uploadPhotoPNG} alt="uploadPhoto" className={s.uploadPhoto}/>
                            </div>
                            <input id={"inputTag"} type="file" onChange={mainPhotoSelectedHandler}
                                   className={s.inputUploadPhoto}/>
                        </label>}
                </div>

                <div className={s.profileBlock}>
                    <div className={s.profileStatus}>
                        <div>Status:</div>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>

                    {editMode
                        ? <div className={s.profileDataForm}>
                            <ProfileDataForm profile={profile}/>
                        </div>
                        : <div className={s.profileDataForm}>
                            <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

type ProfileBlockPropsType = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: () => void
}

const ProfileData: FC<ProfileBlockPropsType> = ({profile, isOwner, goToEditMode}) => {

    return (
        <div>
            <div>
                <b>Full Name</b>: {profile!.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile!.lookingForAJob ? "yes" : "no"}
            </div>
            {profile!.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile!.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile!.aboutMe}
            </div>
            <div>
                {/*<b>Contacts</b>: {Object.keys(profile!.contacts).map((key) => {*/}
                {/*return <Contact key={key} contactTitle={key} contactValue={profile!.contacts[key]} />*/}
                {/*})}*/}
            </div>
            {isOwner && <button onClick={goToEditMode} className={s.buttonEditProfile}>edit</button>}
        </div>
    )
}

const Contact = (contactTitle: string, contactValue: string) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}