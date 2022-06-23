import React from "react";
import s from "./Profile.module.css";


type ContentPropType = {
    img: string,
    img2: string,
    myPost: string,
    newPost: string,
    post: string,


}

export const Profile: React.FC<ContentPropType> = (props) => {
    return (<div className={s.content}>
        <div>
            <img src={props.img} style={{width: "1000px", height: "300px"}} alt=""/>
        </div>
        <div>
            <img src={props.img2} style={{width: "100px"}} alt=""/>
        </div>
        <div>
            <div className={s.item}>
                {props.myPost}
            </div>
            <div className={s.item}>
                {props.newPost}
            </div>
        </div>
        <div>
            <div className={s.item}>
                {props.post}
            </div>
            <div className={s.item}>
                {props.post}
            </div>
        </div>
    </div>);
}


