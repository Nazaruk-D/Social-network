import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";

import {DialogsDataType, InitialStateType, MessagesDataType} from "../../redux/dialogs-reducer";

export type DialogTypeProps = {
    SendMessage: () => void
    updateNewMessageBody: (body: any) => void
    state: InitialStateType
    newMessageBody: string
}


export const Dialogs: React.FC<DialogTypeProps> = (props) => {
    // debugger
    let dialogElements = props.state.dialogsData.map((dialog: DialogsDataType) => <div key={dialog.id}><DialogItem name={dialog.name}
                                                                                          id={dialog.id}
                                                                                          ava={dialog.ava}/>
    </div>)
    let messageElements = props.state.messagesData.map((message:MessagesDataType) => <div key={message.id}><Message name={message.name}
                                                                                          id={message.id}
                                                                                          ava={message.ava}
                                                                                          message={message.message}
                                                                                          newMessageBody={props.state.newMessageBody}/>
    </div>)
    let newMessageBody = props.newMessageBody;

    const SendMessageCreator = () => {
        props.SendMessage()

    }

    const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(updateNewMessageBodyCreator(body))
        debugger
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
        console.log(body)
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
