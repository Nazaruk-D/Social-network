import React, {FC, useState} from 'react';
import s from "./Avatar.module.scss"
import UploadPhoto from "../../../common/UploadPhoto/UploadPhoto";
import ZoomPhoto from "../../../common/ZoomPhoto/ZoomPhoto";
import {getRandomArrayElement} from "../../../Users/getRandomArrayElement";
import {ProfileType} from "../../../../redux/profile-reducer";

type AvatarPropsType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (file: any) => void
}

const Avatar: FC<AvatarPropsType> = ({profile, isOwner, savePhoto}) => {

    const [uploadPhoto, setUploadPhoto] = useState(false)
    const [zoomPhoto, setZoomPhoto] = useState(false)

    const avatar = profile?.photos.large !== null ? profile?.photos.large : getRandomArrayElement()

    return (
        <div className={s.avatarBlock}>
            <div className={s.mainAvatar}>
                <img id="photo" src={avatar} className={s.avatar}/>
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
    );
};

export default Avatar;