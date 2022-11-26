import {AppThunk} from "./store";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/security";

export let initialState = {
    id: null,
    email: "",
    login: "",
    isAuth: false,
    isFetching: false,
    captchaUrl: ""
}


export const authReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA":
            return {...state, ...action.payload}
        case "AUTH/GET-CAPTCHA-URL":
            return {...state, captchaUrl: action.captchaUrl}
        default:
            return state;
    }
}


//Actions
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "AUTH/SET-USER-DATA",
    payload: {id, email, login, isAuth}
} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({type: "AUTH/GET-CAPTCHA-URL", captchaUrl} as const)


//Thunks
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    try {
        // dispatch(toggleIsFetching(true))
        const response = await authAPI.auth()
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
        // dispatch(toggleIsFetching(false))
    } catch (err) {
        console.log(err)
    }
}

export const login = (mail: string, password: string, rememberMe: boolean = false, captcha: string): AppThunk => async (dispatch) => {
    debugger
    try {
        const response = await authAPI.login(mail, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            await dispatch(getAuthUserData())
            dispatch(getCaptchaUrlSuccess(""))
        } else {
            if (response.data.resultCode === 10) {
                await dispatch(getCaptchaUrl())
            }
            const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            await dispatch(stopSubmit("login", {_error: message}))
        }
    } catch (err) {
        console.log(err)
    }
}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    try {
        debugger
        const response = await securityAPI.getCaptcha()
        const captcha = response.data.url
        dispatch(getCaptchaUrlSuccess(captcha))

    } catch (err) {
        console.log(err)
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    try {
        // dispatch(toggleIsFetching(true))
        const response = await authAPI.logout()
        setTimeout(() => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
                dispatch(getAuthUserData())
            }
        }, 2000)
        // dispatch(toggleIsFetching(false))
    } catch (err) {
        console.log(err)
    }
}


//Types
export type InitialStateType = {
    id: number | null,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    isFetching: boolean,
    captchaUrl: string
}

export type actionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

// export type setUserDataType = {
//     type: "SET-USER-DATA",
//     data: {
//         userId: number,
//         email: string,
//         login: string
//     }
// }