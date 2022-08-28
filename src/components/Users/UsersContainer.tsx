import React from 'react';
import {connect} from "react-redux";
import {Users} from "./UsersC";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer";

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropType = {
    follow: (userId:string) => void
    unfollow: (userId:string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (page: any) => void
    setTotalUsersCount: (totalCount: any) => void
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => {
    return {
        follow: (userId:string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
