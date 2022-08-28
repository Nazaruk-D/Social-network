const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"

export type UsersType = {
    id: string
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
}

export let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state;
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UsersType[]) => ({type: SETUSERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCountAC = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, totalCount})