import React from "react";
import s from "./Message.module.scss"
import {Message} from "../../../../redux/dialogs-reducer";


type MessageProps = {
    messages: Array<Message>
}

export const Messages: React.FC<MessageProps> = (props) => {

    return (
        <div className={s.messageContainer}>
            {props.messages.map((m, index) => m.idMessage === "myId"
                ? <div className={s.myMessageBlock}><div key={index} className={s.myMessage}>{m.message}</div></div>
                : <div className={s.friendsMessageBlock}><div key={index} className={s.friendsMessage}>{m.message}</div></div>
            )}
        </div>

    )
}

