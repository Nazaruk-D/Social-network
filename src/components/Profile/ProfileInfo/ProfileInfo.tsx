import React, {FC, useState} from "react";
import s from "./ProfileInfo.module.scss";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus'
import {ProfileDataForm} from "./ProfileDataForm";
import {getRandomArrayElement} from "../../Users/getRandomArrayElement";
import 'react-image-crop/src/ReactCrop.scss'
import UploadPhoto from "../../common/UploadPhoto/UploadPhoto";
import ZoomPhoto from "../../common/ZoomPhoto/ZoomPhoto";
import MainButton from "../../common/MainButton/MainButton";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({profile, isOwner, savePhoto, ...props}) => {

    const [editMode, setEditMode] = useState(false)
    const [uploadPhoto, setUploadPhoto] = useState(false)
    const [zoomPhoto, setZoomPhoto] = useState(false)

    const avatar = profile?.photos.large !== null ? profile?.photos.large : getRandomArrayElement()

    return (
        <div className={s.profileInfoContainer}>
            <div className={s.profileInfoBlock}>
                <div className={s.avatarBlock}>
                    <div className={s.mainAvatar}>
                        <img id="photo"
                             src={avatar}
                             className={s.avatar}/>
                        {isOwner
                            ? <div className={s.photoBlock}>
                                <div className={s.buttonBlock}>
                                    <button className={s.updatePhotoButton} onClick={() => setUploadPhoto(true)}> Upload
                                        photo
                                    </button>
                                    <button className={s.zoomPhotoButton} onClick={() => setZoomPhoto(true)}> Zoom photo
                                    </button>
                                </div>

                            </div>
                            : <div className={s.photoBlock}>
                                <div className={s.buttonBlock}>
                                <button className={s.zoomPhotoButton} onClick={() => setZoomPhoto(true)}> Zoom photo
                                </button>
                                </div>
                            </div>
                        }
                        {uploadPhoto && <UploadPhoto savePhoto={savePhoto} setUploadPhoto={setUploadPhoto}/>}
                        {zoomPhoto && <ZoomPhoto setZoomPhoto={setZoomPhoto} img={avatar}/>}
                    </div>
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
            {isOwner &&
                // <button onClick={goToEditMode} className={s.buttonEditProfile}>edit</button>
                <MainButton onClick={()=>goToEditMode!()} nameButton={"edit"}/>
            }
        </div>
    )
}

const Contact = (contactTitle: string, contactValue: string) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}