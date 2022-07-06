import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";
import {dialogsDataProps, messageDataProps} from "../../index";


export type DialogTypeProps = {
    dialogsData: dialogsDataProps[]
    messageData: messageDataProps[]
}


export const Dialogs: React.FC<DialogTypeProps> = (props) => {
    let dialogElements = props.dialogsData.map(dialog => <div key={dialog.id}><DialogItem name={dialog.name}
                                                                                          id={dialog.id}/>
    </div>)
    let messageElements = props.messageData.map(message => <div key={message.id}><Message text={message.message}/>
    </div>)
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
