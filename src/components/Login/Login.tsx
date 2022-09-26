import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength10 = maxLengthCreator(10)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input} validate={[required, maxLength10]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
