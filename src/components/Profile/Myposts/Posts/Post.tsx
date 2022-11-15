import React from "react";
import s from "./Post.module.scss";
import likePNG from '../../../../assets/png/like.png'
import {postDataPropsType, ProfileType} from "../../../../redux/profile-reducer";

type DataTypeProps = {
    post: string
    name: string
    img: string
    buttonName: string
    likesCount: number
    p: postDataPropsType
    addLike: (idUser: string) => void
    profile: ProfileType
}

export const Post: React.FC<DataTypeProps> = (props) => {
    return (
        <div className={s.postContainer}>
            <div className={s.avaBlock}><img src={props.img} alt="avatar" className={s.ava}/></div>
            <div className={s.textBlock}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.post}</div>
            </div>
            <img src={likePNG} alt="likePNG" className={s.like}
                 onClick={() => props.addLike(props.p.id)}/>
            {props.likesCount}
        </div>
    );
}


