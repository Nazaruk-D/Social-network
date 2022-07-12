import React from "react";
import s from "./Message.module.css"


type MessageProps = {
    name: string
    id: string
    message: string
    ava: string
}

// type DialogItemProps = {
//     name: string
//     id: string
//     message: string
//     ava: string
// }

export const Message: React.FC<MessageProps> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const onclickHandlerAddMessage = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div className={s.block}>
            <div className={s.message}>{props.name} {props.message}</div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={onclickHandlerAddMessage}>Send message</button>
        </div>

    )
}

