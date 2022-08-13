import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";
import {
    ActionsTypes,
    dialogsDataPropsType,
    messagesDataPropsType, SendMessageCreator, updateNewMessageBodyCreator
} from "../../redux/store";

export type DialogType = {
    id: string
    name: string
    message: string
    ava: string
}

export type MessagesDataPropsType = {
    id: string
    name: string
    message: string
    ava: string
}

export type DialogTypeProps = {
    // dialogsData: dialogsDataPropsType[]
    // messageData: messagesDataPropsType[]
    // newMessageBody: string
    // dispatch: (action: ActionsTypes) => void
    SendMessage: () => void
    updateNewMessageBody: (body: any) => void
    // dialogsPage: DialogType[] | MessagesDataPropsType[]
    dialogsPage: any
}


export const Dialogs: React.FC<DialogTypeProps> = (props) => {
    // debugger
    let dialogElements = props.dialogsPage.dialogsData.map((dialog: DialogType) => <div key={dialog.id}><DialogItem name={dialog.name}
                                                                                          id={dialog.id}
                                                                                          ava={dialog.ava}/>
    </div>)
    let messageElements = props.dialogsPage.messagesData.map((message:MessagesDataPropsType) => <div key={message.id}><Message name={message.name}
                                                                                          id={message.id}
                                                                                          ava={message.ava}
                                                                                          message={message.message}
                                                                                          newMessageBody={props.dialogsPage.newMessageBody}/>
    </div>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    const SendMessageCreator = () => {
        props.SendMessage()

    }

    const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(updateNewMessageBodyCreator(body))
        // console.log(body)
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder={"Enter your message"}></textarea>
                </div>
                <div>
                    <button onClick={SendMessageCreator}>Send message</button>
                </div>
            </div>


        </div>
    )
}
