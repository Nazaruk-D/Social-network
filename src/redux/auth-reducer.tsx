import {authAPI} from "../api/api";
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
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    isFetching: boolean
}

export let initialState =  {
    id: 25415,
    email: 'nazaruk-dima@mail.ru',
    login: 'Nazaruk-D',
    isAuth: false,
    isFetching: false
}

export type actionType = setUserDataType


export const authReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
           return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): setUserDataType  => ({type: "SET-USER-DATA", data: {userId, email, login}})

export const authThunk = () => (dispatch: Dispatch) => {
// this.props.toggleIsFetching(true)
    authAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login))
            }
        });
// this.props.toggleIsFetching(false)
}


