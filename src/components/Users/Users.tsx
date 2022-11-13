import React, {useEffect, useState} from 'react';
import s from "./Users.module.scss";
import {getUsersThunk, UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {getRandomArrayElement} from "./getRandomArrayElement";
import InputXXX from "./Input/Input";


export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    totalItemsCount: any
    currentPage: number
    pageSize: number
    onPageChanged: (page: number) => void
    followingInProgress: []
    myFriend: (userId: boolean) => void
    findPerson: (term: string) => void
}

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             currentPage,
                                             onPageChanged,
                                             pageSize,
                                             totalItemsCount,
                                             followingInProgress,
                                             follow,
                                             unfollow,
                                             myFriend,
                                             findPerson
                                         }) => {

    // const [myFriend, setMyFriend] = useState<boolean>(true)
    // const dispatch = useAppDispatch()

    // const xxx = () => {
    //     setMyFriend(true)
    // }
    //
    // const yyy = () => {}
    //
    // useEffect(()=>{
    //     dispatch(getUsersThunk(1, 10, "", myFriend))
    // },[myFriend])


    return (
        <div className={s.usersContainer}>
            <div className={s.paginatorBlock}>
                <InputXXX findPerson={findPerson}/>
                <Paginator currentPage={currentPage} totalItemsCount={totalItemsCount} pageSize={pageSize}
                           onPageChanged={onPageChanged} portionSize={10}/>
                <button onClick={() => {
                    myFriend(true)
                }}>My friends
                </button>
                <button onClick={() => {
                    onPageChanged(3)
                }}>All people
                </button>
            </div>
            <div className={s.usersBlock}>
                {users.map((u: UsersType) =>
                    <div key={u.id} className={s.user}>
                        <NavLink to={'/profile/' + u.id} className={s.avatar}>
                            {/*<img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatarImg}/>*/}
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