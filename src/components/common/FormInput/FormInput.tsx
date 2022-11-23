import React from "react";
import s from "./FormInput.module.scss";


export type FormInputType = {
    placeHolder?: string
    value: string
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}


export const FormInput: React.FC<FormInputType> = ({placeHolder, value, onChange}) => {
    return (
            <input className={s.input} placeholder={placeHolder} value={value}
                      onChange={onChange}>
            </input>
    )
}

