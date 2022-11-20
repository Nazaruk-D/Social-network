import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, ProfileDataTypeServer} from "../api/api";
import BethAva from '../assets/png/BethAva.webp'
import JerryAva from '../assets/png/JerryAva.webp'
import SummerAva from '../assets/png/SummerAva.png'
import MortyAva from '../assets/png/MortyAva.webp'
import RickAva from '../assets/png/RickAva.webp'
import {AppThunk} from "./store";


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
            id: "RickCheater",
            name: "Rick",
            message: "Good thing they don't know...😈",
            likesCount: 333,
            avatar: RickAva
        },
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state: profilePagePropsType = initialState, action: ActionType): profilePagePropsType => {
    switch (action.type) {
        case "PROFILE/ADD-POST":
            let newPost: postDataPropsType = {
                id: v1(),
                name: "",
                message: action.newPostText,
                likesCount: 0,
                avatar: action.ava
            }
            return {
                ...state,
                postData: [newPost, ...state.postData]
            }
        case "PROFILE/SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "PROFILE/SET-STATUS":
            return {...state, status: action.status}
        case "PROFILE/ADD-LIKE":
            debugger
            if (action.userId === "RickCheater") {
                return {
                    ...state,
                    postData: state.postData.map(p => p.id === action.userId ? {
                        ...p,
                        likesCount: p.likesCount + Math.ceil(Math.random() * 100)
                    } : p)
                }
            } else {
                return {
                    ...state,
                    postData: state.postData.map(p => p.id === action.userId ? {...p, likesCount: p.likesCount + 1} : p)
                }
            }
        case "PROFILE/SAVE-PHOTO":
            return {...state, profile: {...state.profile!, photos: action.photo}}
        default:
            return state;
    }
}

//Actions
export const addPostAC = (newPostText: string, ava: string) => ({type: "PROFILE/ADD-POST", newPostText, ava} as const)
export const addLike = (userId: string) => ({type: "PROFILE/ADD-LIKE", userId} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "PROFILE/SET-USER-PROFILE", profile} as const)
export const setStatusProfile = (status: string) => ({type: "PROFILE/SET-STATUS", status} as const)
export const savePhotoSuccess = (photo: { large: string, small: string }) => ({type: "PROFILE/SAVE-PHOTO", photo} as const)


//Thunks
export const setUserProfileThunk = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response))
    } catch (err) {
        console.log(err)
    }

}

export const updateProfileDataThunk = (data: ProfileDataTypeServer, userId: string): AppThunk => async (dispatch) => {
    try {
        await profileAPI.updateProfileData(data)
        await dispatch(setUserProfileThunk(userId))
    } catch (err) {
        console.log(err)
    }
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatusProfile(response.data))
    } catch (err) {
        console.log(err)
    }
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusProfile(status))
        }
    } catch (err) {
        console.log(err)
    }

}

export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    } catch (err) {
        console.log(err)
    }

}



//Types
export type profilePagePropsType = {
    postData: postDataPropsType []
    profile: ProfileType
    status: string
}

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
        "youtube": string,
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

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusProfile>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof addLike>

