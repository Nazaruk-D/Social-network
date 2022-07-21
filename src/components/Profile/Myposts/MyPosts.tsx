import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {postDataPropsType, updateNewPostText} from "../../../redux/state";


type MyPostPropType = {
    postData: postDataPropsType[]
    addPost: () => void
    updateNewPostText: (message: string) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostPropType> = (props) => {

    let postsElements = props.postData.map(p => <div key={p.id}><Post img={p.avatar}
                                                                      post={p.message}
                                                                      likesCount={p.likesCount}
                                                                      buttonName={"Like"}/>
    </div>)

    let newPostElementProfile = React.createRef<HTMLTextAreaElement>();

    const onClickHandler = () => {
        props.addPost()
    }

    const updateNewPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        console.log(text)
    }

    return <div>
        <textarea ref={newPostElementProfile}
                  className={s.textArea}
                  onChange={updateNewPostText}
                  value={props.newPostText}/>
        <button onClick={onClickHandler}>AddPost</button>
        <div className={s.item}>
            {postsElements}
        </div>
    </div>

}


