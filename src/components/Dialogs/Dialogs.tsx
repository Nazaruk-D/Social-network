import React from 'react';
import s from './Dialogs.module.scss'
import {DialogsDataType, InitialStateType} from "../../redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {useParams} from "react-router-dom";
import {Messages} from "./DialogsComponents/Message/Message";
import {FriendsList} from "./DialogsComponents/FriendsList/FriendsList";

export type DialogTypeProps = {
    SendMessage: (values: string, userId: string) => void
    DeleteMessage: (friendsId: string, messageId: string) => void
    updateNewMessageBody: (body: any) => void
    dialogs: InitialStateType
    newMessageBody: string
    isAuth: boolean
}


export const Dialogs: React.FC<DialogTypeProps> = (props) => {

    let {userId} = useParams<{ userId: string }>()

    const addNewMessage = (values: AddMessageFormType) => {
        props.SendMessage(values.newMessageBody, userId)
    }

    const deleteMessage = (friendsId: string, messageId: string) => {
        props.DeleteMessage(friendsId, messageId)
    }

    let dialogElements = props.dialogs.map((dialog: DialogsDataType) => <div key={dialog.id}><FriendsList
        name={dialog.name}
        id={dialog.id}
        ava={dialog.ava}/>
    </div>)

    let messages = props.dialogs.map((dialog: DialogsDataType, index) => dialog.id === userId
        ? <div key={index}><Messages messages={dialog.messages} deleteMessage={deleteMessage}/></div>
        : null
    )
    // if (!props.isAuth) return <Redirect to={"/login"}/>


    return (
        <div className={s.dialogsContainer}>
            <div className={s.friendsList}>
                <div className={s.title}>Friends list</div>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messages}
                </div>
                {userId && <AddMessageFormRedux onSubmit={addNewMessage}/>}
            </div>
        </div>
    )
}


export type AddMessageFormType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} validate={[required, maxLength50]} name={"newMessageBody"}
                       placeholder={"Enter your message"} className={s.textField}/>
            </div>
            <div className={s.buttonBlock}>
                <button className={s.button}>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm)