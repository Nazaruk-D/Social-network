import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";



type dialogsDataProps = {
    id: number,
    name: string
}
type messageDataProps = {
    id: number,
    message: string
}




export const Dialogs = () => {

    let dialogsData: dialogsDataProps[] = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Kate"},
        {id: 4, name: "Nik"},
    ]

    let messagesData: messageDataProps[] = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Whats UUPP!"},
        {id: 3, message: "OMG LoL"}
    ]

    let dialogElements = dialogsData.map(dialog => <div key={dialog.id}><DialogItem name={dialog.name} id={dialog.id}/></div>)
    let messageElements = messagesData.map(message => <div key={message.id}><Message text={message.message}/></div>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>


        </div>
    )
}
