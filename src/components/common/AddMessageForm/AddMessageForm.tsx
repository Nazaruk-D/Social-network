import React, {useState} from "react";
import s from "./AddMessageForm.module.scss";
import BigButton from "../BigButton/BigButton";


export type AddMessageFormType = {
    onSubmit: (values: string) => void
}


export const AddMessageForm: React.FC<AddMessageFormType> = (props) => {
    const [value, setValue] = useState("")

    const setValueHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const sendMessage = () => {
        if (value !== "") {
            props.onSubmit(value)
            setValue("")
        }
    }

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            props.onSubmit(value)
            setValue("")
        }
    }

    return (
        <div className={s.addMessageFormBlock}>
            <textarea className={s.textField} placeholder={"Enter your message"} value={value}
                      onChange={setValueHandler} onKeyDown={onKeyDownHandler}>
            </textarea>
            <BigButton onClick={sendMessage}/>
        </div>
    )
}

