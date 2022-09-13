import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsersThunk,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import UserC from "./UserC";
import {MoonLoader} from "react-spinners";
import s from "./UsersContainer.module.css"
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}
type MapDispatchPropType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (page: any) => void
    toggleIsFollowingProgress: (followingInProgress: boolean, userId: string) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropType

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (page: number) => {
        this.props.getUsersThunk(page, this.props.pageSize)
        this.props.setCurrentPage(page)
    }


    render() {

        return <div className={s.loading}>
            {this.props.isFetching
                ? <MoonLoader color={"#b70000"} size={50}/>
                : <UserC totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         onPageChanged={this.onPageChanged}
                         followingInProgress={this.props.followingInProgress}
                />
            }

        </div>
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


let withRedirect = WithAuthRedirect(UsersContainer)

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsersThunk})(withRedirect);




