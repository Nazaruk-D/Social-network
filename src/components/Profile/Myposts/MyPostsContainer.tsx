import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {
    ActionsTypes,
    addPostActionCreator,
    postDataPropsType, SendMessageCreator, updateNewMessageBodyCreator, updateNewPostActionCreator,
} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {InitialStateType} from "../../../redux/dialogs-reducer";
import {profilePagePropsType} from "../../../redux/profile-reducer";

type MapStatePropsType = {
    state: profilePagePropsType
    newPostText: string
}
type MapDispatchPropType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.profile,
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => {

    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

