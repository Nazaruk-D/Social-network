import React from "react";
import s from "./Message.module.css"


type MessageProps = {
name: string
id: string
message: string
ava: string
}

// type DialogItemProps = {
//     name: string
//     id: string
//     message: string
//     ava: string
// }

export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={s.block}>

            <table>
                <tr>

                </tr>
                <tr>
                </tr>
            </table>
            <div className={s.message}>{props.name}  {props.message}</div>
        </div>

    )
}

