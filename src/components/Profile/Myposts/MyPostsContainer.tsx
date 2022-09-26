import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, profilePagePropsType} from "../../../redux/profile-reducer";

type MapStatePropsType = {
    state: profilePagePropsType
}
type MapDispatchPropType = {
    addPost: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType=> {
    return {
        state: state.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => {

    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

