import React, {FC, useState} from 'react';
import MainButton from "../../../common/MainButton/MainButton";
import {ProfileType} from "../../../../redux/profile-reducer";
import {ProfileDataTypeServer} from "../../../../api/api";

type ProfileDataFormPropsType = {
    profile: ProfileType
    updateProfileData: (data: ProfileDataTypeServer, userId: string) => void
    setEditMode: () => void
}

export const ProfileDataForm: FC<ProfileDataFormPropsType> = ({profile, updateProfileData, setEditMode}) => {

    const [profileData, setProfileData] = useState<ProfileDataType>({
        fullName: profile!.fullName,
        lookingForAJob: profile!.lookingForAJob,
        lookingForAJobDescription: profile!.lookingForAJobDescription,
        aboutMe: profile!.aboutMe,

    })


    const inputFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({...profileData, fullName: e.currentTarget.value})
    }

    const inputDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({...profileData, lookingForAJobDescription: e.currentTarget.value})
    }

    const inputAboutMe = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({...profileData, aboutMe: e.currentTarget.value})
    }

    const radioLookingForAJob = (value: boolean) => {
        setProfileData({...profileData, lookingForAJob: value})
    }

    const newData: ProfileDataTypeServer = {
        userId: profile!.userId,
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        ...profileData
    }
    // const newData = {...profileData}

    const onCLickHandler = () => {
        updateProfileData(newData, String(profile!.userId))
        setEditMode()
    }

    return (
        <form>
            <div>
                {/*<b>Full Name</b>: {createField("Full name", "fullname", [], Input)}*/}
                <b>Full Name</b>: <input type="text" value={profileData.fullName} onChange={inputFullName}/>
            </div>
            <div>
                {/*<b>Looking for a job</b>: {profile!.lookingForAJob ? "yes" : "no"}*/}
                <b>Looking for a job</b>:
                <label>
                    <input type="radio" name={"radio"} value={"true"} checked={profileData.lookingForAJob}
                           onChange={() => radioLookingForAJob(true)}/> yes
                    <input type="radio" name={"radio"} value={"false"} checked={!profileData.lookingForAJob}
                           onChange={() => radioLookingForAJob(false)}/> no
                </label>
            </div>
            {/*{profile!.lookingForAJob &&*/}
            {profileData.lookingForAJob &&
                <div>
                    {/*<b>My professional skills</b>: {profile!.lookingForAJobDescription}*/}
                    <b>My professional skills</b>: <input type="text" value={profileData.lookingForAJobDescription}
                                                          onChange={inputDescription}/>
                </div>
            }
            <div>
                {/*<b>About me</b>: {profile!.aboutMe}*/}
                <b>About me</b>: <input type="text" value={profileData.aboutMe} onChange={inputAboutMe}/>
            </div>
            <div>
                {/*<b>Contacts</b>: {Object.keys(profile!.contacts).map((key) => {*/}
                {/*return <Contact key={key} contactTitle={key} contactValue={profile!.contacts[key]} />*/}
                {/*})}*/}
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <span><MainButton onClick={onCLickHandler} nameButton={"save"}/></span>
                <span style={{marginLeft:"5px"}}><MainButton onClick={() => setEditMode()} nameButton={"close"}/></span>
            </div>

        </form>
    );
};

export type ProfileDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}
