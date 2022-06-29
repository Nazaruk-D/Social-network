import React from "react";
import s from "./Message.module.css"


type MessageProps = {
    text: string
}

export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={s.block}>
            <div className={s.message}>{props.text}</div>
        </div>

    )
}

