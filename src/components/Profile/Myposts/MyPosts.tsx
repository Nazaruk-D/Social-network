import React, {useState} from "react";
import s from "./MyPosts.module.scss";
import {Post} from "./Posts/Post";
import {addPostAC, profilePagePropsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AddMessageFormType} from "../../Dialogs/Dialogs";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControl/FormsControl";
import {useAppDispatch} from "../../../redux/redux-store";


type MyPostPropType = {
    state: profilePagePropsType
    addPost: (values: string) => void
    addLike: (idUser: string) => void
}

export const MyPosts: React.FC<MyPostPropType> = React.memo((props) => {

    const [page, setPage] = useState(1)
    const postsArray = props.state.postData
    const allPage = Math.ceil(postsArray.length / 5)
    const pageVision = []

    for (let i = 1; i < allPage + 1; i++) {
        pageVision.push(i)
    }
    const foo = (page: number) => {
        if (page === 1) {
            return postsArray.slice(0, 5)
        } else if (page > 1) {
            const startMessage = (page * 5) - 5
            const endMessage = page * 5
            return postsArray.slice(startMessage, endMessage)
        }
    }

    const portionArray = foo(page)

    let postsElements = portionArray!.map(p => <div key={p.id}><Post img={p.avatar}
                                                                     name={p.name}
                                                                     post={p.message}
                                                                     likesCount={p.likesCount}
                                                                     buttonName={"Like"}
                                                                     addLike={props.addLike}
                                                                     p={p}
    />
    </div>)

    let pagination = pageVision.map((p, index) => {
        const isActive = page === p ? {color: "rgb(211, 181, 91)"} : {}
        return <span key={index} className={s.pagination} style={isActive} onClick={() => setPage(p)}>{p}</span>
    })

    const addPost = (values: AddMessageFormType) => {
        props.addPost(values.newMessageBody)
    }

    return (
        <div className={s.myPostContainer}>
            <div className={s.addForm}>
                <AddNewPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.messageBlock}>
                <div className={s.item}>
                    {postsElements}
                </div>
            </div>
            <div className={s.paginationBlock}>
                {pagination}
            </div>
        </div>
    )
})

type AddNewPostFormType = {
    newMessageBody: string
}

const maxLength10 = maxLengthCreator(10)


const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    const dispatch = useAppDispatch()
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            dispatch(addPostAC(e.currentTarget.value))
        }
    }

    return (
        <form onSubmit={props.handleSubmit} className={s.formContainer}>
            <Field component={TextArea} name={"newMessageBody"} placeholder={"Enter your message"}
                   className={s.textArea} validate={[required, maxLength10]} onKeyDown={onKeyDownHandler}/>
            <button className={s.addPostButton}>AddPost</button>
        </form>
    )
}


const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: "profileAddMessageForm"})(AddNewPostForm)

