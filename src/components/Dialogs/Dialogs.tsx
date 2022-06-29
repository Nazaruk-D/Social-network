import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsComponents/DialogItem";
import {Message} from "./DialogsComponents/Message";


    export const Dialogs = () => {
        return (
            <div className={s.dialogs}>
                    <div className={s.dialog}>
                        <DialogItem name={"Dima"} id={1}/>
                        <DialogItem name={"Alex"} id={2}/>
                        <DialogItem name={"Kate"} id={3}/>
                        <DialogItem name={"Nik"} id={4}/>
                    </div>
                <div className={s.messages}>
                    <Message text={"Hello"}/>
                    <Message text={"Whats UUPP!"}/>
                    <Message text={"OMG LoL"}/>
                </div>


            </div>
        )
    }
