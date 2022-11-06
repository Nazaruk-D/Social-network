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
import s from "./UsersContainer.module.css"
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/user-selectors";
import {Preloader} from "../common/Preloader/Preloader";
import Users from "./Users";


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

        return <div className={s.usersBlock}>
            {this.props.isFetching
                // ? <MoonLoader color={"#b70000"} size={50}/>
                ? <Preloader/>
                : <Users totalItemsCount={this.props.totalUsersCount}
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


// let mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}


// let withRedirect = withAuthRedirect(UsersContainer)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsersThunk}),
    // withAuthRedirect
)(UsersContainer)



//
// connect(mapStateToProps,
//     {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsersThunk})(withRedirect);




