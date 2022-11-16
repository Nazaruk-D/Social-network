import React, {useState} from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import {DialogsDataType} from "./redux/dialogs-reducer";
import {initializeApp} from "./redux/app-reducer";
import s from './App.module.scss'
import Stone from "./components/Stone/Stone";
import {Preloader} from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))

type MapStatePropsType = {
    dialogsData: DialogsDataType[]
    initialized: boolean
}

type MapDispatchPropType = {
    initThunk: () => void
}
export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropType

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
                <div className={s.background}></div>
                <div className={s.appContainer}>
                    <div className={s.headerContainer}>
                        <HeaderContainer/>
                    </div>
                    <div className={s.bodyContainer}>
                        <div className={s.nav}>
                            <Nav/>
                            <Stone/>
                        </div>
                        <div className={s.main}>
                            <Route path="/dialogs/:userId?" render={() => {
                                return <React.Suspense fallback={<Preloader/>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path="/profile/:userId?" render={() => {
                                return <React.Suspense fallback={<Preloader/>}>
                                    <ProfileContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            {/*<Route path="/" render={() => <Login/>}/>*/}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}




const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    dialogsData: state.dialogs,
    initialized: state.app.initialized
})

// export default App;
export default compose(
    // withRouter,
    connect(mapStateToProps, {initThunk: initializeApp})(App)
);