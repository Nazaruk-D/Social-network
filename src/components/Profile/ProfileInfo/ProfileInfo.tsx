import React, {useState} from "react";
import s from "./ProfileInfo.module.scss";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus/ProfileStatus'
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import {getRandomArrayElement} from "../../Users/getRandomArrayElement";
import 'react-image-crop/src/ReactCrop.scss'
import UploadPhoto from "../../common/UploadPhoto/UploadPhoto";
import ZoomPhoto from "../../common/ZoomPhoto/ZoomPhoto";
import {ProfileDataTypeServer} from "../../../api/api";
import {ProfileData} from "./ProfileData/ProfileData";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    authId: number | null
    updateProfileData: (data: ProfileDataTypeServer, userId: string) => void

}

export const ProfileInfo: React.FC<ProfileInfoType> = ({profile, isOwner, savePhoto, ...props}) => {

    const [editMode, setEditMode] = useState(false)
    const [uploadPhoto, setUploadPhoto] = useState(false)
    const [zoomPhoto, setZoomPhoto] = useState(false)

    const avatar = profile?.photos.large !== null ? profile?.photos.large : getRandomArrayElement()
    const authMeNumber = Number(props.authId)
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
                        {profile!.userId === authMeNumber
                            ? <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                            : <span>{props.status}</span>
                        }
                    </div>
                    {editMode
                        ? <div className={s.profileDataForm}>
                            <ProfileDataForm profile={profile} updateProfileData={props.updateProfileData}
                                             setEditMode={() => setEditMode(false)}/>
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

