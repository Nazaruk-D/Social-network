import React from "react";
import s from "./Message.module.css"
import {ActionsTypes} from "../../../redux/state";


type MessageProps = {
    name: string
    id: string
    message: string
    ava: string
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string
}

export const Message: React.FC<MessageProps> = (props) => {

    // let newMessageBody = props.newMessageBody;
    //
    // const onclickHandlerAddMessage = () => {
    //     props.dispatch(SendMessageCreator())
    //
    // }
    //
    // const onNewMessageChange= (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.currentTarget.value
    //     props.dispatch(updateNewMessageBodyCreator(body))
    //     console.log(body)
    // }

    return (
        <div className={s.block}>
            {props.message}
        </div>

    )
}

