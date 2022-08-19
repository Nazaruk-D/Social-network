const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"

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
}

export let initialState = {
    users: [],
}

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case SETUSERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UsersType[]) => ({type: SETUSERS, users})