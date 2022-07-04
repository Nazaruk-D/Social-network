import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";


    export const Dialogs = () => {

        let dialogsData = [
            {id: 1, name: "Dima"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Kate"},
            {id: 4, name: "Nik"},
        ]

        let messagesData = [
            {id: 1, message: "Hello"},
            {id: 2, message: "Whats UUPP!"},
            {id: 3, message: "OMG LoL"}
        ]


        return (
            <div className={s.dialogs}>
                    <div className={s.dialog}>
                        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    </div>
                <div className={s.messages}>
                    <Message text={messagesData[0].message}/>
                    <Message text={messagesData[1].message}/>
                    <Message text={messagesData[2].message}/>
                </div>


            </div>
        )
    }
