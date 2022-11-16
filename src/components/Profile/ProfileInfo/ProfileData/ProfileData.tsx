import React, {FC} from 'react';
import {ProfileType} from "../../../../redux/profile-reducer";
import MainButton from "../../../common/MainButton/MainButton";

type ProfileBlockPropsType = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: () => void
}

export const ProfileData: FC<ProfileBlockPropsType> = ({profile, isOwner, goToEditMode}) => {

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
                <div style={{display:"flex", justifyContent: "flex-end", marginTop: 11}}><MainButton onClick={() => goToEditMode!()} nameButton={"edit"}/></div>
            }
        </div>
    )
}

// const Contact = (contactTitle: string, contactValue: string) => {
//     return <div><b>{contactTitle}</b>: {contactValue}</div>
// }