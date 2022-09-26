import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";

import {DialogsDataType, InitialStateType, MessagesDataType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type DialogTypeProps = {
    SendMessage: (values: string) => void
    updateNewMessageBody: (body: any) => void
    state: InitialStateType
    newMessageBody: string
    isAuth: boolean
}


export const Dialogs: React.FC<DialogTypeProps> = (props) => {
    // debugger
    let dialogElements = props.state.dialogsData.map((dialog: DialogsDataType) => <div key={dialog.id}><DialogItem
        name={dialog.name}
        id={dialog.id}
        ava={dialog.ava}/>
    </div>)
    let messageElements = props.state.messagesData.map((message: MessagesDataType) => <div key={message.id}><Message
        name={message.name}
        id={message.id}
        ava={message.ava}
        message={message.message}
    />
    </div>)

    // if (!props.isAuth) return <Redirect to={"/login"}/>

    const addNewMessage = (values: AddMessageFormType) => {
        props.SendMessage(values.newMessageBody)
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>


        </div>
    )
}





export type AddMessageFormType = {
    newMessageBody: string
}


export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm)