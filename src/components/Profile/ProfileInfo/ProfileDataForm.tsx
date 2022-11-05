import React, {FC} from 'react';
import {createField, Input} from "../../common/FormsControl/FormsControl";

type ProfileDataFormPropsType = {
    // profile: ProfileType
    profile: any
}

export const ProfileDataForm: FC<ProfileDataFormPropsType> = ({profile}) => {
    return (
        <form>
            <div>
                <b>Full Name</b>: {createField("Full name", "fullname", [], Input)}
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
            <button onClick={()=>{}}>save</button>
        </form>
    );
};
