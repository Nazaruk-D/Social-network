import {Dispatch} from "redux";
import {usersAPI} from "../api/usersAPI";


export let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    forSearchPerson: ""
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "USERS/FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case "USERS/UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case "USERS/SET-USERS":
            return {...state, users: action.users}
        case "USERS/SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "USERS/SET-TOTAL-USER-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "USERS/TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "USERS/SEARCH":
            debugger
            return {...state, forSearchPerson: action.search}
        case "USERS/FOLLOWING-IN-PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter((id: number) => id !== action.userId)]
            }
        default:
            return state;
    }
}

//Actions
export const followSuccess = (userId: number) => ({type: "USERS/FOLLOW", userId} as const)
export const unfollowSuccess = (userId: number) => ({type: "USERS/UNFOLLOW", userId} as const)
export const setUsers = (users: UsersType[]) => ({type: "USERS/SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "USERS/SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: "USERS/SET-TOTAL-USER-COUNT", totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "USERS/TOGGLE-IS-FETCHING", isFetching} as const)
export const searchPerson = (search: string) => ({type: "USERS/SEARCH", search} as const)
export const toggleIsFollowingProgress = (followingInProgress: boolean, userId: number) => ({
    type: "USERS/FOLLOWING-IN-PROGRESS",
    followingInProgress,
    userId
} as const)


//Thunks
export const getUsersThunk = (currentPage: number, pageSize: number, term?: string, friend?: boolean) => async (dispatch: Dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize, term, friend)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    } catch (err) {
        console.log(err)
    }

}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(toggleIsFollowingProgress(true, userId))
        const data = await usersAPI.follow(userId)
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    } catch (err) {
        console.log(err)
    }

}

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(toggleIsFollowingProgress(true, userId))
        const data = await usersAPI.unFollow(userId)
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    } catch (err) {
        console.log(err)
    }
}

// export const searchTC = (text: string) => async (dispatch: Dispatch) => {
//     try {
//         const data = await usersAPI.getUsers(1, 10, text)
//         if (data.resultCode === 0) {
//             dispatch(searchPerson(text))
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }

//Types
export type UsersType = {
    id: number
    followed: boolean
    photos: { small: string }
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type InitialStateType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: any
    forSearchPerson: string
}

export type ActionType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof searchPerson>

