import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addLike, addPostAC, profilePagePropsType, ProfileType} from "../../../redux/profile-reducer";

type MapStatePropsType = {
    state: profilePagePropsType
    profile: ProfileType
}

type MapDispatchPropType = {
    addPost: (values: string, ava: string) => void
    addLike: (idUser: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType=> {
    return {
        state: state.profile,
        profile: state.profile.profile,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => {
    return {
        addPost: (newPostText: string, ava: string) => {
            dispatch(addPostAC(newPostText, ava))
        },
        addLike: (idUser: string) => {
            dispatch(addLike(idUser))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

