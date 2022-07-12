import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {DataTypeProps} from "../../../redux/state";


type MyPostPropType = {
    postData: DataTypeProps[]
}

export const MyPosts: React.FC<MyPostPropType> = (props) => {

    let postsElements = props.postData.map(p => <div key={p.id}><Post img={p.avatar}
                                                                      post={p.message}
                                                                      likesCount={p.likesCount}
                                                                      buttonName={"Like"}/>
    </div>)

    let newPostElementProfile = React.createRef<HTMLTextAreaElement>();
    const onClickHandler = () => {
        alert(newPostElementProfile.current?.value);
    }

    return <div>
        {/*<input style={{marginLeft: "44px", marginTop: "20px", width: "300px", height: "50px"}} type="text"/>*/}
        <textarea ref={newPostElementProfile} style={{marginLeft: "44px", marginTop: "20px", width: "300px", height: "50px"}}/>
        <button onClick={onClickHandler}>AddPost</button>
        <div className={s.item}>
            {postsElements}
        </div>
    </div>

}


