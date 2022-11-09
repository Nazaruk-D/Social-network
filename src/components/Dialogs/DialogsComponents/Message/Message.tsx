import React, {useState} from "react";
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

    //удалить или пофиксить
    const [visible, setVisible] = useState(true)

    const deleteMessage = (friendsId: string, messageId: string) => {
        props.deleteMessage(friendsId, messageId)
    }

    const deleteButton = visible ? {opacity: "100%"} : {opacity: "0%"}

    return (
        <div className={s.messageContainer}>
            {props.messages.map((m) => m.myPost
                ? <div className={s.myMessageBlock} key={m.idMessage} >
                    <div className={s.myMessage}
                         // onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
                    >
                        <div>{m.message}</div>
                        <div className={s.data}>{m.dataMessage}</div>
                    </div>
                    <div className={s.delete} onClick={() => deleteMessage(userId, m.idMessage)} style={ deleteButton}>
                        <MdDeleteForever style={{fontSize: "20px"}}/>
                    </div>
                </div>
                : <div className={s.friendsMessageBlock} key={m.idMessage}>
                    <div className={s.friendsMessage}>
                        <div>{m.message}</div>
                        <div className={s.data}>{m.dataMessage}</div>
                    </div>
                </div>
            )}
        </div>

    )
}

