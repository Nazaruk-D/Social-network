import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {LoginReduxForm} from "./LoginForm/LoginForm";
import s from './Login.module.scss'
import {routes} from "../NavBar/Nav/routes";


const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={routes.profile}/>
    }

    return (
        <div className={s.loginContainer}>
            <div className={s.loginBlock}>
                <h1 className={s.login}>Login</h1>
                <div>
                    <p className={s.description}>To log in get registered <a style={{textDecoration: "none"}}
                                                                             href="https://social-network.samuraijs.com/">here</a>
                    </p>
                    <p className={s.description}>or use common test account credentials:</p>
                    <p className={s.description}>Email: <b>free@samuraijs.com</b></p>
                    <p className={s.description}>Password: <b>free</b></p>
                </div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};


type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }

}
export default connect(mapStateToProps, {login})(Login)