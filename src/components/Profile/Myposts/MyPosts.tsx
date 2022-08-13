import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {profilePagePropsType} from "../../../redux/profile-reducer";


type MyPostPropType = {
    state: profilePagePropsType
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts: React.FC<MyPostPropType> = (props) => {

    let postsElements = props.state.postData.map(p => <div key={p.id}><Post img={p.avatar}
                                                                            post={p.message}
                                                                            likesCount={p.likesCount}
                                                                            buttonName={"Like"}/>
    </div>)

    let newPostElementProfile = React.createRef<HTMLTextAreaElement>();

    const onClickHandler = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())
    }

    const updateNewPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostActionCreator(text))
        // console.log(text)
    }

    const cleanTextArea = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value === "Введите текст") {
            e.currentTarget.value = ""
        }
    }

    return <div>
        <textarea ref={newPostElementProfile}
                  className={s.textArea}
                  onChange={updateNewPostText}
                  value={props.newPostText}
                  onFocus={cleanTextArea}/>
        <button onClick={onClickHandler}>AddPost</button>
        <div className={s.item}>
            {postsElements}
        </div>
    </div>

}


