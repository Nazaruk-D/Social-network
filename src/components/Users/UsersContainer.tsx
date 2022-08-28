import React from 'react';
import {connect} from "react-redux";
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
import axios from "axios";
import UserC from "./UserC";

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




export type UsersAPIPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

/// Классовая компонента Users
class UsersContainer extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {


        return <UserC totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}
        />
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
