import React, {useEffect, useState} from 'react';
import s from './Dialogs.module.scss'
import {DialogsDataType, fetchChat, InitialStateType} from "../../redux/dialogs-reducer";
import {useParams} from "react-router-dom";
import {Messages} from "./DialogsComponents/Message/Message";
import {FriendsList} from "./DialogsComponents/FriendsList/FriendsList";
import {AddMessageForm} from "../common/AddMessageForm/AddMessageForm";
import {useAppDispatch} from "../../redux/store";
import {formatDate} from "../../utils/formatDate/formatDate";


export type DialogTypeProps = {
    SendMessage: (values: string, userId: string) => void
    DeleteMessage: (friendsId: string, messageId: string) => void
    dialogs: InitialStateType
}

export const Dialogs: React.FC<DialogTypeProps> = (props) => {
    const {userId} = useParams<{ userId: string }>()
    const dispatch = useAppDispatch()
    const [ws, setWS] = useState<any>(null)
    const [users, setUsers] = useState<any>([])

    if (ws) {
        ws.onmessage = (messageEvent: any) => {
            let messages = JSON.parse(messageEvent.data)
            setUsers([...users, ...messages])
        }
    }

    useEffect(() => {
        let localWS = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
        setWS(localWS)
    }, [])

    useEffect(() => {
        const newArr = users.map((u:any, index: number) => ({idMessage: index, userName: u.userName, message: u.message, dataMessage: formatDate(new Date()), myPost: u.userId === 25415}))
        dispatch(fetchChat(newArr))
    }, [users, dispatch])


    const addNewMessageWS = (values: string) => {
        ws.send(values)
    }

    const addNewMessage = (values: string) => {
        props.SendMessage(values, userId)
    }

    const deleteMessage = (friendsId: string, messageId: string) => {
        props.DeleteMessage(friendsId, messageId)
    }

    const dialogElements = props.dialogs.map((dialog: DialogsDataType) => <div key={dialog.id}><FriendsList
        name={dialog.name}
        id={dialog.id}
        ava={dialog.ava}/>
    </div>)

    const messages = props.dialogs.map((dialog: DialogsDataType, index) => dialog.id === userId
        ? <div key={index}><Messages messages={dialog.messages} deleteMessage={deleteMessage}/></div>
        : null
    )

    return (
        <div className={s.dialogsContainer}>
            <div className={s.friendsList}>
                <div className={s.title}>Friends list</div>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messages}
                {userId === "webSocket" && <AddMessageForm onSubmit={addNewMessageWS}/> }
                {userId && userId !== "webSocket"  && <AddMessageForm onSubmit={addNewMessage}/>}
            </div>
        </div>
    )
}


