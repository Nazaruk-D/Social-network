import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";
import {
    ActionsTypes,
    dialogsDataPropsType,
    messagesDataPropsType, SendMessageCreator, updateNewMessageBodyCreator
} from "../../redux/store";
import {Dialogs} from "./Dialogs";


export type DialogTypeProps = {
    // dialogsData: dialogsDataPropsType[]
    // messageData: messagesDataPropsType[]
    // newMessageBody: string
    // dispatch: (action: ActionsTypes) => void
    store: any
}


export const DialogsContainer: React.FC<DialogTypeProps> = (props) => {
    let state = props.store.getState().dialogs;

    const onclickHandlerAddMessage = () => {
        props.store.dispatch(SendMessageCreator())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <Dialogs SendMessage={onclickHandlerAddMessage} updateNewMessageBody={onNewMessageChange} dialogsPage={state}/>
    )
}
