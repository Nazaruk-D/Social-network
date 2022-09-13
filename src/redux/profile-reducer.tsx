import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type profilePagePropsType = {
    postData: postDataPropsType []
    newPostText: string
    profile: ProfileType
    status: string
}

export type AddPostType = {
    type: "ADD-POST"
}

export type UpdateNewPostTextType  = {
    type: "UPDATE-NEW-POST-TEXT"
    postText: string
}

export type setUserProfileType = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}

export type setStatus = {
    type: "SET-STATUS"
    status: string
}

export type ActionType = AddPostType | UpdateNewPostTextType | setUserProfileType | setStatus


export type postDataPropsType = {
    id: string
    message: string,
    likesCount: number
    avatar: string
}

export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string ,
        "github": string,
        "mainLink": string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
} | null


let initialState = {
    postData: [
        {
            id: v1(),
            message: "Hello",
            likesCount: 12,
            avatar: "data:image/jpeg;base64,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"
        },
        {
            id: v1(),
            message: "Guys!",
            likesCount: 11,
            avatar: "data:image/jpeg;base64,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"
        },
        {
            id: v1(),
            message: "This is my new post",
            likesCount: 3,
            avatar: "data:image/jpeg;base64,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"
        },
        {
            id: v1(),
            message: "This is my new post Guys",
            likesCount: 44,
            avatar: "https://pbs.twimg.com/media/D9wcZfeX4AAUZi0.jpg"
        }
    ],
    newPostText: "Введите текст",
    profile: null,
    status: ""
}

export const profileReducer = (state: profilePagePropsType = initialState, action: ActionType): profilePagePropsType => { // типизировать!!  : profilePagePropsType
    switch (action.type) {
        case "ADD-POST":
            let newPost: postDataPropsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
                avatar: "https://sun9-55.userapi.com/impf/4OVa92OuK5A2PL1OkHkfDHRK41EaNgTpv860Tw/DVztYSAWFbA.jpg?size=512x512&quality=96&sign=2df645602452340721ae5fcaeffc49ae&type=album"
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.postText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }

}

export const addPostAC = (): AddPostType => ({type: "ADD-POST"})
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({type: "SET-USER-PROFILE", profile})
export const updateNewPostTextAC = (postText: string): UpdateNewPostTextType => ({type: "UPDATE-NEW-POST-TEXT", postText})
export const setStatus = (status: string): setStatus => ({type: "SET-STATUS", status})

export const setUserProfileThunk = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}