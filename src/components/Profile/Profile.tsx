import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postDataPropsType} from "../../redux/store";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";


type ProfileTypeProps = {
    // postData: postDataPropsType[]
    // addPost: () => void
    // updateNewPostText: (message: string) => void
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    store: any
}

export const Profile: React.FC<ProfileTypeProps> = (props) => {

    return (<div className={s.profile}>
        <ProfileInfo
            img={"https://www.eurohandball.com/media/f0rhclep/microsoftteams-image-267.png?center=0.40662327708788731,0.27796471311115661&mode=crop&width=1980&height=768&rnd=132863759739570000"}/>
        {/*<MyPostsContainer postData={props.postData}*/}
        {/*         // addPost={props.addPost}*/}
        {/*         newPostText={props.newPostText}*/}
        {/*         // updateNewPostText={props.updateNewPostText}*/}
        {/*         dispatch={props.dispatch}*/}
        {/*/>*/}
        <MyPostsContainer store={props.store}/>
    </div>);
}

