import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

export type setUserDataType = {
    type: "SET-USER-DATA",
    data: {
        userId: number,
        email: string,
        login: string
    }
}

export type InitialStateType = {
    id: number | null,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    isFetching: boolean
}

export let initialState = {
    // id: "25415",
    // email: 'nazaruk-dima@mail.ru',
    // login: 'Nazaruk-D',
    // isAuth: false,
    // isFetching: false
    id: null,
    email: "",
    login: "",
    isAuth: false,
    isFetching: false
}

export type actionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setUserId>


export const authReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload}
        case "SET-USER-ID":
            return {...state, id: action.userId}
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "SET-USER-DATA",
    payload: {userId, email, login, isAuth}
} as const)

export const setUserId = (userId: number | null) => ({type: "SET-USER-ID", userId} as const)

export const getAuthUserData = () => async (dispatch: Dispatch) => {
// this.props.toggleIsFetching(true)
    let response = await authAPI.auth()
    if (response.data.resultCode === 0) {
        console.log(response.data)
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))

    }
// this.props.toggleIsFetching(false)
}

export const login = (mail: string, password: string, rememberMe: boolean = false) => async (dispatch: any) => {
// this.props.toggleIsFetching(true)
    let response = await authAPI.login(mail, password, rememberMe)
        if (response.data.resultCode === 0) {
            console.log(response.data.data.userId)
            // dispatch()
            // let {id, email, login} = response.data;
            // console.log(id, email, login)
            // dispatch(setAuthUserData(id, email, login, true))
            dispatch(getAuthUserData())
            dispatch(setUserId(response.data.data.userId))
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch = (stopSubmit("login", {_error: message}))
        }
// this.props.toggleIsFetching(false)
}


export const logout = (): AppThunk => async (dispatch) => {
// this.props.toggleIsFetching(true)
    let response = await authAPI.logout()
    setTimeout(() => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
            dispatch(getAuthUserData())
            dispatch(setUserId(null))
        }
    }, 2000)

// this.props.toggleIsFetching(false)
}


