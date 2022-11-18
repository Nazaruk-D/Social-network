import React, {useState} from "react";
import s from "./MyPosts.module.scss";
import {Post} from "./Posts/Post";
import {profilePagePropsType, ProfileType} from "../../../redux/profile-reducer";
import {AddMessageForm} from "../../../common/AddMessageForm/AddMessageForm";


type MyPostPropType = {
    state: profilePagePropsType
    addPost: (values: string, ava: string) => void
    addLike: (idUser: string) => void
    profile: ProfileType

}

export const MyPosts: React.FC<MyPostPropType> = React.memo((props) => {

    const [page, setPage] = useState(1)
    const postsArray = props.state.postData
    const ava = props.profile!.photos.large
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
                                                                     profile={props.profile}

    />
    </div>)

    let pagination = pageVision.map((p, index) => {
        const isActive = page === p ? {color: "rgb(211, 181, 91)"} : {}
        return <span key={index} className={s.pagination} style={isActive} onClick={() => setPage(p)}>{p}</span>
    })

    const avatar = ava ? ava : "https://sun9-55.userapi.com/impf/4OVa92OuK5A2PL1OkHkfDHRK41EaNgTpv860Tw/DVztYSAWFbA.jpg?size=512x512&quality=96&sign=2df645602452340721ae5fcaeffc49ae&type=album"

    const addPost = (values: string) => {
        props.addPost(values, avatar)
    }


    return (
        <div className={s.myPostContainer}>
            <div className={s.addForm}>
                <AddMessageForm onSubmit={addPost}/>
            </div>
            <div className={s.messageBlock}>
                <div className={s.item}>
                    {postsElements}
                </div>
            </div>
            <div className={s.paginationBlock}>
                {pagination.length > 1 && pagination}
            </div>
        </div>
    )
})




