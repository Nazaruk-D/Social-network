import React from "react";
import s from "./ProfileInfo.module.scss";
import {ProfileType} from "../../../redux/profile-reducer";
import 'react-image-crop/src/ReactCrop.scss'
import {ProfileDataTypeServer} from "../../../api/api";
import Avatar from "./Avatar/Avatar";
import ProfileDescription from "./ProfileDescription/ProfileDescription";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    authId: number | null
    updateProfileData: (data: ProfileDataTypeServer, userId: string) => void

}

export const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                           profile,
                                                           isOwner,
                                                           savePhoto,
                                                           updateProfileData,
                                                           updateStatus,
                                                           status,
                                                           authId
                                                       }) => {
    return (
        <div className={s.profileInfoContainer}>
            <div className={s.profileInfoBlock}>
                <Avatar profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
                <ProfileDescription profile={profile} authId={authId} status={status} updateStatus={updateStatus}
                                    isOwner={isOwner} updateProfileData={updateProfileData}/>
            </div>
        </div>
    )
}

