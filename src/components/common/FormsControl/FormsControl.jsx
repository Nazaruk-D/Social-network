import React from 'react';
import s from "./FormsControl.module.css"
import {Field} from "redux-form";


export const FormControl = ({input, meta, child, ...props}) => {
    const hasErr = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasErr ? s.error : "")}>
            {props.children}
            <div>
                {hasErr && <span>{meta.error}</span>}
            </div>
        </div>
    );
}


export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>{<textarea {...input} {...restProps}/>}</FormControl>
};


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>{<input {...input} {...restProps}/>}</FormControl>
};


export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/>
        {text}
    </div>
}