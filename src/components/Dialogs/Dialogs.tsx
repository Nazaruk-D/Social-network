import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}




    export const Dialogs = () => {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <div className={s.dialog}>
                        <DialogItem name={"Dima"} id={1}/>
                        <DialogItem name={"Alex"} id={2}/>
                        <DialogItem name={"Kate"} id={3}/>
                        <DialogItem name={"Nik"} id={4}/>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className="message">123</div>
                    <div className="message">321</div>
                    <div className="message">12312312</div>
                </div>


            </div>
        )
    }
