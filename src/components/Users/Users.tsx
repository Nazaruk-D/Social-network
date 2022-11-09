import React from 'react';
import s from "./Users.module.scss";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {getRandomArrayElement} from "./getRandomArrayElement";

export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    totalItemsCount: any
    currentPage: number
    pageSize: number
    onPageChanged: (page: number) => void
    followingInProgress: []
}

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             currentPage,
                                             onPageChanged,
                                             pageSize,
                                             totalItemsCount,
                                             followingInProgress,
                                             follow,
                                             unfollow
                                         }) => {
    return (
        <div className={s.usersContainer}>
            <div className={s.paginatorBlock}>
                <Paginator currentPage={currentPage} totalItemsCount={totalItemsCount} pageSize={pageSize}
                           onPageChanged={onPageChanged} portionSize={10}/>
            </div>
            <div className={s.usersBlock}>
                {users.map((u: UsersType) =>
                    <div key={u.id} className={s.user}>
                        <NavLink to={'/profile/' + u.id} className={s.avatar}>
                            {/*<img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatarImg}/>*/}
                            <img src={u.photos.small != null ? u.photos.small : getRandomArrayElement()} className={s.avatarImg}/>
                        </NavLink>
                        <div className={s.informBlock}>
                            <div>
                                <div>{u.name}</div>
                                <div>Status: {!u.status ? '' : u.status}</div>
                                <div>id: {u.id}</div>
                            </div>
                        </div>
                        <div className={s.followButton}>
                            {u.followed
                                ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    unfollow(u.id)
                                }}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default Users;