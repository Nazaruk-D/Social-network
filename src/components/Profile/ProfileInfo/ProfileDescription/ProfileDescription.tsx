import React, {FC, useState} from 'react';
import s from "./ProfileDescription.module.scss";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileDataForm} from "./ProfileStatus/ProfileDataForm/ProfileDataForm";
import {ProfileData} from "./ProfileStatus/ProfileData/ProfileData";
import {ProfileType} from "../../../../redux/profile-reducer";
import {ProfileDataTypeServer} from "../../../../api/api";


type ProfileDescriptionPropsType = {
    profile: ProfileType
    authId: number | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updateProfileData: (data: ProfileDataTypeServer, userId: string) => void
}

const ProfileDescription: FC<ProfileDescriptionPropsType> = ({profile, authId,status, updateStatus, isOwner, updateProfileData}) => {

    const [editMode, setEditMode] = useState(false)
    const authMeNumber = Number(authId)

    return (
        <div className={s.profileBlock}>
            <div className={s.profileStatus}>
                <div>Status:</div>
                {profile!.userId === authMeNumber
                    ? <ProfileStatus status={status} updateStatus={updateStatus}/>
                    : <span>{status}</span>
                }
            </div>
            {editMode
                ? <div className={s.profileDataForm}>
                    <ProfileDataForm profile={profile} updateProfileData={updateProfileData}
                                     setEditMode={() => setEditMode(false)}/>
                </div>
                : <div className={s.profileDataForm}>
                    <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>
                </div>
            }
        </div>
    );
};

export default ProfileDescription;