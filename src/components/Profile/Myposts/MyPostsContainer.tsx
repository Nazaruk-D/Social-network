import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {
    ActionsTypes,
    addPostActionCreator,
    postDataPropsType, updateNewPostActionCreator,
} from "../../../redux/store";
import {MyPosts} from "./MyPosts";


type MyPostPropType = {
    // postData: postDataPropsType[]
    // addPost: () => void
    // updateNewPostText: (message: string) => void
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    store: any
}

export const MyPostsContainer: React.FC<MyPostPropType> = (props) => {
    debugger
    let state = props.store.getState();

    const addPost = () => {
        // props.addPost()
        props.store.dispatch(addPostActionCreator())
    }

    const updateNewPostText = (text: string) => {
        // let text = e.currentTarget.value
        // props.updateNewPostText(text)
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
        // console.log(text)
    }

    return (
        <MyPosts postData={state.profile.postData}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 newPostText={state.profile.newPostText}/>
        // <MyPosts postData={props.postData} addPost={onClickHandler} updateNewPostText={updateNewPostText} newPostText={props.newPostText} dispatch={props.dispatch}/>
    )

}


