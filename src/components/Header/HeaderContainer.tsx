import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchPropType = {
    authThunk: () => void
    logout: () => void
}

export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropType


class HeaderContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
    this.props.authThunk()
    }

    render() {
        return <Header
            img={"https://www.eurohandball.com/media/f45ofcxo/ehf_og_image2.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132375557452270000"}
            {...this.props}
        />
    }
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {authThunk: getAuthUserData, logout: logout})(HeaderContainer);