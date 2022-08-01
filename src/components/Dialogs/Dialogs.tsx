import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";
import {
    ActionsTypes,
    dialogsDataPropsType,
    messagesDataPropsType, SendMessageCreator, updateNewMessageBodyCreator
} from "../../redux/state";


export type DialogTypeProps = {
    dialogsData: dialogsDataPropsType[]
    messageData: messagesDataPropsType[]
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}


export const Dialogs: React.FC<DialogTypeProps> = (props) => {
    let dialogElements = props.dialogsData.map(dialog => <div key={dialog.id}><DialogItem name={dialog.name}
                                                                                          id={dialog.id}
                                                                                          ava={dialog.ava}/>
    </div>)
    let messageElements = props.messageData.map(message => <div key={message.id}><Message name={message.name}
                                                                                          id={message.id}
                                                                                          ava={message.ava}
                                                                                          message={message.message}
                                                                                          dispatch={props.dispatch}
                                                                                          newMessageBody={props.newMessageBody}/>
    </div>)
    let newMessageBody = props.newMessageBody;

    const onclickHandlerAddMessage = () => {
        props.dispatch(SendMessageCreator())

    }

    const onNewMessageChange= (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
        console.log(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                <div >
                    {messageElements}
                </div>
                <div>
                    <textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder={"Enter your message"}></textarea>
                </div>
                <div>
                    <button onClick={onclickHandlerAddMessage}>Send message</button>
                </div>
            </div>


        </div>
    )
}
