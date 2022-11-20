import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {getAuthUserData, setAuthUserData} from "./auth-reducer";

export type InitialStateType = {
    initialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case "APP/INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: "APP/INITIALIZED-SUCCESS",} as const)

export const initializeApp = (): AppThunk => async (dispatch) => {
    try {
        await dispatch(getAuthUserData())
        await dispatch(initializedSuccess())
        await dispatch(initializedSuccess())

    } catch (err) {
        console.log(err)
    }
}

// export const login = (mail: string, password: string, rememberMe: boolean = false) => async (dispatch: any) => {
//     const res = await authAPI.login(mail, password, rememberMe)
//     if (res.data.resultCode === 0) {
//         dispatch(getAuthUserData())
//     } else {
//         const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
//         dispatch(stopSubmit("login", {_error: message}))
//     }
//     // authAPI.login(mail, password, rememberMe)
//     //     .then(response => {
//     //         if (response.data.resultCode === 0) {
//     //             dispatch(getAuthUserData())
//     //         } else {
//     //             let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
//     //             dispatch = (stopSubmit("login", {_error: message}))
//     //         }
//     //     });
// }
//
// export const logout = (): AppThunk => (dispatch) => {
// // this.props.toggleIsFetching(true)
//     authAPI.logout()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null, false))
//                 dispatch(getAuthUserData())
//             }
//         });
// // this.props.toggleIsFetching(false)
// }


// types

export let initialState = {
    initialized: false
}
export type actionType = ReturnType<typeof initializedSuccess>


