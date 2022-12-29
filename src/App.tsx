import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import s from './App.module.scss'
import {Preloader} from "./components/common/Preloader/Preloader";
import RoutesApp from "./components/RoutesApp/RoutesApp";
import NavBar from "./components/NavBar/NavBar";
import {AppStateType} from "./redux/store";


class App extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.initThunk()
    }

    render() {

        if (!this.props.initialized) {
            return <div style={{height: '100vh'}}><Preloader type={"start"}/></div>
        }

        return (
            <div className={s.app}>
                {window.innerWidth > 1200
                    ? <>
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
                    </>
                    : <>
                        <div className={s.auxiliaryMessage}>
                            <span> This site is not adapted for mobile devices and screens with a resolution already 1200px.</span>
                            <span> Please, for further viewing, open this site from your computer.</span>
                        </div>
                        <div className={s.auxiliaryBackground}></div>
                    </>
                }

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