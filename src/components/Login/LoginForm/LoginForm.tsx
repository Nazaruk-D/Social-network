import React, {useState} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from "./LoginForm.module.scss"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength20 = maxLengthCreator(20)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    const [visionPass, setVisionPass] = useState(false)
    const typePassInput = visionPass ? "text" : "password"
    const onClickHandler = () => {
        setVisionPass(!visionPass)
    }

    return (
        <form onSubmit={props.handleSubmit} className={s.loginFormContainer}>
            <div className={s.email}>
                <Field
                    placeholder={"Email"}
                    name={'email'}
                    component={Input}
                    validate={[required, maxLength20]}
                    style={{width:"250px"}}
                />
            </div>
            <div className={s.password}>
                <Field
                    placeholder={"Password"}
                    name={'password'}
                    type={typePassInput}
                    component={Input}
                    validate={[required, maxLength20]}
                    style={{width:"250px", marginTop:"10px"}}/>
                <div className={s.eye} onClick={onClickHandler}></div>
            </div>
            <div className={s.rememberMe}>
                <Field
                    type={"checkbox"}
                    name={'rememberMe'}
                    component={Input}
                    validate={[required, maxLength20]}
                    style={{marginBottom: "10px"}}
                /> remember me
            </div>
            { props.error && <div className={s.formError}>
                {props.error}
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};




export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)