import React from "react";
import s from "./Message.module.css"


type MessageProps = {
    name: string
    id: string
    message: string
    ava: string
    newMessageBody: string
}

export const Message: React.FC<MessageProps> = (props) => {

    return (
        <div className={s.block}>
            {props.message}
        </div>

    )
}

