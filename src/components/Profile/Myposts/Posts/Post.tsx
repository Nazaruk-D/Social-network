import React from "react";
import s from "./Post.module.css";


type DataTypeProps = {
    post: string,
    img: string,
    buttonName: string
    likesCount: number
}

export const Post: React.FC<DataTypeProps> = (props) => {


    return (
        <span>
        <div className={s.item}>
            <span><img src={props.img} alt=""/></span>
            <div>{props.post}</div>
            <button>{props.buttonName} {props.likesCount}</button>
        </div>
    </span>);
}


