import React from "react";
import s from "./Post.module.scss";
import likePNG from '../../../../assets/png/like.png'

type DataTypeProps = {
    post: string,
    img: string,
    buttonName: string
    likesCount: number
}

export const Post: React.FC<DataTypeProps> = (props) => {


    return (
        <div className={s.postContainer}>
            <div className={s.avaBlock}><img src={props.img} alt="avatar" className={s.ava}/></div>
            <div className={s.textBlock}>{props.post}</div>
            <img src={likePNG} alt="likePNG" className={s.like}/> {props.likesCount}
        </div>
 );
}


