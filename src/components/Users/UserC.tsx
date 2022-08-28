import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png";


export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    totalUsersCount: any
    currentPage: number
    pageSize: number
    onPageChanged: (page: number) => void
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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.ava}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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