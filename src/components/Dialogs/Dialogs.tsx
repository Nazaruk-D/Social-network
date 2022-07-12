import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";
import {dialogsDataPropsType, messagesDataPropsType} from "../../redux/state";


export type DialogTypeProps = {
    dialogsData: dialogsDataPropsType[]
    messageData: messagesDataPropsType[]
}


export const Dialogs: React.FC<DialogTypeProps> = (props) => {
    let dialogElements = props.dialogsData.map(dialog => <div key={dialog.id}><DialogItem name={dialog.name}
                                                                                          id={dialog.id}
                                                                                          ava={dialog.ava}/>
    </div>)
    let messageElements = props.dialogsData.map(message => <div key={message.id}><Message name={message.name}
                                                                                          id={message.id}
                                                                                          ava={message.ava}
                                                                                          message={message.message}/>
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
