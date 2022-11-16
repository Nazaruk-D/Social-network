import React, {useState} from "react";
import s from "./FormInput.module.scss";


export type FormInputType = {
    placeHolder?: string
    value: string
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}


export const FormInput: React.FC<FormInputType> = ({placeHolder, value, onChange}) => {
    // const [value, setValue] = useState("")
    //
    // const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.currentTarget.value)
    // }

    return (
            <input className={s.input} placeholder={placeHolder} value={value}
                      onChange={onChange}>
            </input>
    )
}

