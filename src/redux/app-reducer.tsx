import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {getAuthUserData, setAuthUserData} from "./auth-reducer";

export type InitialStateType = {
    initialized: boolean
}

export let initialState = {
    initialized: false
}

export type actionType = ReturnType<typeof initializedSuccess>


export const appReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: "INITIALIZED-SUCCESS",} as const)

export const initializeApp = ():AppThunk => (dispatch) => {
    // let promise = Promise.resolve(dispatch(getAuthUserData()))
    // promise.then(() => dispatch(initializedSuccess()))
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => dispatch(initializedSuccess()))

}

export const login = (mail: string, password: string, rememberMe: boolean = false) => (dispatch: any) => {
// this.props.toggleIsFetching(true)

    authAPI.login(mail, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                    dispatch = (stopSubmit("login", {_error: message}))
            }
        });
// this.props.toggleIsFetching(false)
}

export const logout = (): AppThunk => (dispatch) => {
// this.props.toggleIsFetching(true)
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
                dispatch(getAuthUserData())
            }
        });
// this.props.toggleIsFetching(false)
}


