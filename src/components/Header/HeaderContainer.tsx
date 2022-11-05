import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchPropType = {
    logout: () => void
}

export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropType


class HeaderContainer extends React.Component<UsersContainerPropsType> {
    render() {
        return <Header
            {...this.props}
        />
    }
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logout: logout})(HeaderContainer);