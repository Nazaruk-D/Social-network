import React from "react";
import s from "./MyPosts.module.scss";
import {Post} from "./Posts/Post";
import {profilePagePropsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AddMessageFormType} from "../../Dialogs/Dialogs";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControl/FormsControl";


type MyPostPropType = {
    state: profilePagePropsType
    addPost: (values: string) => void
}

export const MyPosts: React.FC<MyPostPropType> = React.memo((props) => {

    let postsElements = props.state.postData.map(p => <div key={p.id}><Post img={p.avatar}
                                                                            post={p.message}
                                                                            likesCount={p.likesCount}
                                                                            buttonName={"Like"}/>
    </div>)

    const addPost = (values: AddMessageFormType) => {
        props.addPost(values.newMessageBody)
    }

    return (
        <div className={s.myPostContainer}>
            <div className={s.addForm}>
                <AddNewPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.item}>
                {postsElements}
            </div>
        </div>
    )
})

type AddNewPostFormType = {
    newMessageBody: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.formContainer}>
            <Field component={TextArea} name={"newMessageBody"} placeholder={"Enter your message"}
                   className={s.textArea} validate={[required, maxLength10]}/>
            <button className={s.addPostButton}>AddPost</button>
        </form>
    )
}


const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: "profileAddMessageForm"})(AddNewPostForm)

