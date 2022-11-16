import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"


export type UsersType = {
    id: number
    followed: boolean
    photos: {small: string}
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
}

export let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SETUSERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case FOLLOWING_IN_PROGRESS:
            return {...state, followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter((id:string) => id !== action.userId)]}
        default:
            return state;
    }
}

export const followSuccess = (userId: string) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsers = (users: UsersType[]) => ({type: SETUSERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, totalCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (followingInProgress: boolean, userId: string) => ({type: FOLLOWING_IN_PROGRESS, followingInProgress, userId})


export const getUsersThunk = (currentPage: number, pageSize: number, term?: string, friend?: boolean) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize, term, friend).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    });
}

export const follow = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        });
}

export const unfollow = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.unFollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        });
}

