import React from "react";
import s from "./Message.module.scss"
import {Message} from "../../../../redux/dialogs-reducer";
import {useParams} from "react-router-dom";
import {MdDeleteForever} from "react-icons/md";


type MessageProps = {
    messages: Array<Message>
    deleteMessage: (friendsId: string, messageId: string) => void
}

export const Messages: React.FC<MessageProps> = (props) => {
    let {userId} = useParams<{ userId: string }>()

    const deleteMessage = (friendsId: string, messageId: string) => {
        props.deleteMessage(friendsId, messageId)
    }

    return (
        <div className={s.messageContainer}>
            {props.messages.map((m) => m.myPost
                ? <div className={s.myMessageBlock} key={m.idMessage}>
                    <div className={s.myMessage}
                    >
                        <div>{m.message}</div>
                        <div className={s.data}>{m.dataMessage}</div>
                    </div>
                    <div className={s.delete} onClick={() => deleteMessage(userId, m.idMessage)}>
                        <MdDeleteForever style={{fontSize: "20px"}}/>
                    </div>
                </div>
                : <div className={s.friendsMessageBlock} key={m.idMessage}>
                    <div className={s.friendsMessage}>
                        <div>{m.message}</div>
                        <div className={s.data}>{m.dataMessage}</div>
                    </div>
                </div>
            ).reverse()}
        </div>
    )
}

