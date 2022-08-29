import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, profilePagePropsType, updateNewPostTextAC} from "../../../redux/profile-reducer";

type MapStatePropsType = {
    state: profilePagePropsType
    newPostText: string
}
type MapDispatchPropType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType=> {
    return {
        state: state.profile,
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => {

    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

