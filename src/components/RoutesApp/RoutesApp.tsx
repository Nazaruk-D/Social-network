import React from 'react';
import s from "./RoutesApp.module.scss";
import {Preloader} from "../common/Preloader/Preloader";
import UsersContainer from "../Users/UsersContainer";
import {News} from "../News/News";
import {Music} from "../Music/Music";
import {Settings} from "../Settings/Settings";
import Login from "../Login/Login";
import {Route} from "react-router-dom";

const RoutesApp = () => {

    const DialogsContainer = React.lazy(() => import ("../../components/Dialogs/DialogsContainer"))
    const ProfileContainer = React.lazy(() => import ("../../components/Profile/ProfileContainer"))

    return (
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
        </div>
    );
};

export default RoutesApp;