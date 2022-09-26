import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {profilePagePropsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AddMessageFormType} from "../../Dialogs/Dialogs";


type MyPostPropType = {
    state: profilePagePropsType
    addPost: (values: string) => void
}

export const MyPosts: React.FC<MyPostPropType> = (props) => {

    let postsElements = props.state.postData.map(p => <div key={p.id}><Post img={p.avatar}
                                                                            post={p.message}
                                                                            likesCount={p.likesCount}
                                                                            buttonName={"Like"}/>
    </div>)

    // let newPostElementProfile = React.createRef<HTMLTextAreaElement>();
    //
    // const onClickHandler = () => {
    //     // props.addPost()
    // }
    //
    // const updateNewPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.updateNewPostText(text)
    //
    // }
    //
    // const cleanTextArea = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    //     if (e.currentTarget.value === "Введите текст") {
    //         e.currentTarget.value = ""
    //     }
    // }

    const addPost = (values: AddMessageFormType) => {
        props.addPost(values.newMessageBody)
    }

    return <div>
       <AddNewPostFormRedux onSubmit={addPost}/>
        <div className={s.item}>
            {postsElements}
        </div>
    </div>

}

type AddNewPostFormType = {
    newMessageBody: string
}

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"} className={s.textArea}/>
            <button>AddPost</button>
        </form>
    )
}



const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: "profileAddMessageForm"})(AddNewPostForm)

