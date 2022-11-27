import React from 'react';
import s from "./Users.module.scss";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {getRandomArrayElement} from "./getRandomArrayElement";
import SearchPerson from "./SearchPerson/SearchPerson";
import MainButton from "../common/MainButton/MainButton";


export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalItemsCount: any
    currentPage: number
    pageSize: number
    onPageChanged: (page: number) => void
    followingInProgress: []
    myFriend: (userId: boolean) => void
    findPerson: (term: string) => void
    myProfileId: number
}

const Users: React.FC<UsersPropsType> = React.memo ( ({
                                             users,
                                             currentPage,
                                             onPageChanged,
                                             pageSize,
                                             totalItemsCount,
                                             followingInProgress,
                                             follow,
                                             unfollow,
                                             myFriend,
                                             findPerson,
                                             myProfileId
                                         }) => {

    return (
        <div className={s.usersContainer}>
            <div className={s.searchBlock}>
                <SearchPerson findPerson={findPerson}/>
                <div className={s.sortBlock}>
                    <MainButton onClick={() => myFriend(true)} nameButton={"my friends"}/>
                    <MainButton onClick={() => onPageChanged(1)} nameButton={"all people"}/>
                </div>
            </div>
            <div className={s.usersBlock}>
                {users.map((u: UsersType) =>
                    <div key={u.id} className={s.user}>
                        <NavLink to={'/profile/' + u.id} className={s.avatar}>
                            <img src={u.photos.small != null ? u.photos.small : getRandomArrayElement()}
                                 className={s.avatarImg}/>
                        </NavLink>
                        <div className={s.informBlock}>
                            <div>
                                <div>{u.name}</div>
                                <div>Status: {!u.status ? '' : u.status}</div>
                                <div>id: {u.id}</div>
                            </div>
                        </div>
                        {u.id != myProfileId &&
                            <div className={s.followButton}>
                                {u.followed
                                    ? <MainButton onClick={() => {
                                        unfollow(u.id)
                                    }} nameButton={"unfollow"} disable={followingInProgress.some(id => id === u.id)}/>
                                    : <MainButton onClick={() => {
                                        follow(u.id)
                                    }} nameButton={"follow"} disable={followingInProgress.some(id => id === u.id)}/>
                                }
                            </div>
                        }
                    </div>
                )}
            </div>
            <Paginator currentPage={currentPage} totalItemsCount={totalItemsCount} pageSize={pageSize}
                       onPageChanged={onPageChanged} portionSize={10}/>
        </div>
    );
});

export default Users;