import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/store";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../redux/auth-reducer";


type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    };


    return connect(mapStateToPropsForRedirect, {getAuthUserData, logout})(RedirectComponent);
}

