import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    totalUsersCount: any
    currentPage: number
    pageSize: number
    onPageChanged: (page: number) => void
    toggleIsFollowingProgress: (followingInProgress:  boolean, userId: string) => void
    followingInProgress: []
}

const UserC: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                <div>
                    {pages.map((p, index) => <span key={index}
                                                   className={props.currentPage === p ? s.selectedPage : ""}
                                                   onClick={() => props.onPageChanged(p)}>{p}</span>)}
                </div>
                {props.users.map((u: UsersType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.ava}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         "API-KEY": "0eaf2c78-b360-4d05-800a-fd9132ed05f7"
                                    //     }
                                    // })
                                    props.toggleIsFollowingProgress(true, u.id)
                                    usersAPI.unFollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        });

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         "API-KEY": "0eaf2c78-b360-4d05-800a-fd9132ed05f7"
                                    //     }
                                    // })
                                    props.toggleIsFollowingProgress(true, u.id)
                                    usersAPI.follow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        });



                                }}>Follow</button>
                        }

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)}
            </div>
        </div>
    );
};

export default UserC;