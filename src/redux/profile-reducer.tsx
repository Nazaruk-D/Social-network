import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import BethAva from '../assets/png/BethAva.webp'
import JerryAva from '../assets/png/JerryAva.webp'
import SummerAva from '../assets/png/SummerAva.png'
import MortyAva from '../assets/png/MortyAva.webp'
import RickAva from '../assets/png/RickAva.webp'


export type profilePagePropsType = {
    postData: postDataPropsType []
    profile: ProfileType
    status: string
}

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusProfile>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof addLike>


export type postDataPropsType = {
    id: string
    name: string
    message: string
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
            name: "Beth",
            message: "Hey! Has anyone seen Jerry?",
            likesCount: 3,
            avatar: BethAva
        },
        {
            id: v1(),
            name: "Jerry",
            message: "Shh... don't tell her I'm under her",
            likesCount: 0,
            avatar: JerryAva
        },
        {
            id: v1(),
            name: "Summer",
            message: "O My God... let's change the father from another dimension...",
            likesCount: 2,
            avatar: SummerAva
        },
        {
            id: v1(),
            name: "Morty",
            message: "Hey Samer! Do not say that!",
            likesCount: 1,
            avatar: MortyAva
        },
        {
            id: v1(),
            name: "Rick",
            message: "Good thing they don't know...😈",
            likesCount: 666,
            avatar: RickAva
        },
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state: profilePagePropsType = initialState, action: ActionType): profilePagePropsType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: postDataPropsType = {
                id: v1(),
                name: "",
                message: action.newPostText,
                likesCount: 0,
                avatar: "https://sun9-55.userapi.com/impf/4OVa92OuK5A2PL1OkHkfDHRK41EaNgTpv860Tw/DVztYSAWFbA.jpg?size=512x512&quality=96&sign=2df645602452340721ae5fcaeffc49ae&type=album"
            }
            return {
                ...state,
                postData: [newPost, ...state.postData]
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        case "ADD-LIKE":
            debugger
            // return {...state, postData: {...state.postData.filter( p => p.id === action.userId ? {...p, likesCount: p.likesCount + 1} : p)} }
            return {...state, postData: state.postData.map( p => p.id === action.userId ? {...p, likesCount: p.likesCount + 1} : p)}
        case "SAVE-PHOTO":
            const copyState = {...state}
            copyState.profile!.photos.small = action.photo
            return copyState
            // return {...state, profile: {...state.profile, photos: action.photo}}
        default:
            return state;
    }

}

export const addPostAC = (newPostText: string) => ({type: "ADD-POST", newPostText} as const)
export const addLike = (userId: string) => {
    debugger
    return ({type: "ADD-LIKE", userId} as const)
}
export const setUserProfile = (profile: ProfileType) => ({type: "SET-USER-PROFILE", profile} as const)
export const setStatusProfile = (status: string) => ({type: "SET-STATUS", status} as const)
export const savePhotoSuccess = (photo: string) => ({type: "SAVE-PHOTO", photo} as const)
export const setUserProfileThunk = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusProfile(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
            }
        })
}

export const savePhoto = (file: any) => (dispatch: Dispatch) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
        })
}