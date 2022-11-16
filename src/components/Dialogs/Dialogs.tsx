import React from 'react';
import s from './Dialogs.module.scss'
import {DialogsDataType, InitialStateType} from "../../redux/dialogs-reducer";
import {useParams} from "react-router-dom";
import {Messages} from "./DialogsComponents/Message/Message";
import {FriendsList} from "./DialogsComponents/FriendsList/FriendsList";
import {AddMessageForm} from "../common/AddMessageForm/AddMessageForm";

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

    const addNewMessage = (values: string) => {
        props.SendMessage(values, userId)
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
                    {messages}
                {userId && <AddMessageForm onSubmit={addNewMessage}/>}
            </div>
        </div>
    )
}


