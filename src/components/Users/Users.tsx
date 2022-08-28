import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.png"


// {*/
// }
// {/*            id: v1(),*/
// }
// {/*            followed: false,*/
// }
// {/*            photoURL: "https://sun9-25.userapi.com/impf/buEzh8PYEnECuHx5lpnyeUNZQti1GQ57ZiBe0g/aV3GO_nKKZw.jpg?size=1437x2160&quality=96&sign=2fb1d9e7e4c3ebbcffc2253d4038045a&type=album",*/
// }
// {/*            fullname: "Dima",*/
// }
// //             status: "Hello",
// //             location: {
// //                 city: "Minsk",
// {/*                country: "Belarus"*/
// }
// //             }
// //         },

export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void

}

export const Users: React.FC<UsersPropsType> = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
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
    );
};
