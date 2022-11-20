import {usersAPI} from "../api/api";
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";
import {AppThunk} from "./store";


let initialState = {
    searchName: "",
    isMyFriend: false,
    currentPage: 1,
    pageSize: 10,
}

export type SettingsInitialStateType = typeof initialState

export const settingsReducer = (state: SettingsInitialStateType = initialState, action: ActionType): SettingsInitialStateType => {
    switch (action.type) {
        case "SETTINGS/IS-MY-FRIEND":
            return {...state, ...action.settings}
        default:
            return state;
    }
}


//Actions
export const setSettings = (settings: settingsType) => ({type: "SETTINGS/IS-MY-FRIEND", settings} as const)


//Thunks
export const getUsersThunk = (settings: settingsType): AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(settings.currentPage))
    const {currentPage, pageSize, term, friend} = settings
    usersAPI.getUsers(currentPage, pageSize, term, friend).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    });
}


//Types
type settingsType = { currentPage: number, pageSize: number, term?: string, friend?: boolean }

export type ActionType = ReturnType<typeof setSettings>
