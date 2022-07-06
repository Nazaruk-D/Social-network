import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {DataTypeProps} from "../../../index";


type MyPostPropType = {
    postData: DataTypeProps[]
}

export const MyPosts: React.FC<MyPostPropType> = (props) => {

    let postsElements = props.postData.map(p => <div key={p.id}><Post img={p.avatar}
                                                                      post={p.message}
                                                                      likesCount={p.likesCount}
                                                                      buttonName={"Like"}/>
    </div>)

    return <div>
        <input style={{marginLeft: "40px", width: "300px", height: "50px"}} type="text"/>
        <div className={s.item}>
            {postsElements}
        </div>
    </div>

}


