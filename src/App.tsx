import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import s from './App.module.scss'
import {Preloader} from "./components/common/Preloader/Preloader";
import RoutesApp from "./components/RoutesApp/RoutesApp";
import NavBar from "./components/NavBar/NavBar";


class App extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.initThunk()
    }

    render() {

        if (!this.props.initialized) {
            return <div style={{height:'100vh'}}><Preloader/></div>
        }

        return (
            <div className={s.app}>
                <div className={s.appContainer}>
                    <div className={s.headerContainer}>
                        <HeaderContainer/>
                    </div>
                    <div className={s.bodyContainer}>
                        <NavBar/>
                        <RoutesApp/>
                    </div>
                </div>
                <div className={s.background}></div>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initThunk: initializeApp})(App)
);


//types
type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropType = {
    initThunk: () => void
}
export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropType