import {v1} from "uuid";

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
    // isFetching: boolean
}

export let initialState =  {
    id: 25415,
    email: 'nazaruk-dima@mail.ru',
    login: 'Nazaruk-D',
    isAuth: false,
    // isFetching: false
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
