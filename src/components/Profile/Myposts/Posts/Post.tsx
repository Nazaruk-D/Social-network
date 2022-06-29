import React from "react";
import s from "./Post.module.css";


type PostPropType = {
    post: string,
    img: string,
    buttonName: string
}

export const Post: React.FC<PostPropType> = (props) => {
    return (
        <span>
        <div className={s.item}>
            <span><img src={props.img} alt=""/></span>
            <div>{props.post}</div>
            <button>{props.buttonName}</button>
        </div>
    </span>);
}


