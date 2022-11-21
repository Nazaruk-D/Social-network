import React from 'react';
import s from "./RoutesApp.module.scss";
import {Preloader} from "../../common/Preloader/Preloader";
import UsersContainer from "../Users/UsersContainer";
import {News} from "../News/News";
import {Music} from "../Music/Music";
import {Settings} from "../Settings/Settings";
import Login from "../Login/Login";
import {Route} from "react-router-dom";
import {routes} from "../../routes/routes";

const RoutesApp = () => {

    const DialogsContainer = React.lazy(() => import ("../../components/Dialogs/DialogsContainer"))
    const ProfileContainer = React.lazy(() => import ("../../components/Profile/ProfileContainer"))

    return (
        <div className={s.main}>
            <Route path={routes.dialogs} render={() => {
                return <React.Suspense fallback={<Preloader/>}>
                    <DialogsContainer/>
                </React.Suspense>
            }}/>
            <Route path={routes.profile} render={() => {
                return <React.Suspense fallback={<Preloader/>}>
                    <ProfileContainer/>
                </React.Suspense>
            }}/>
            <Route path={routes.users} render={() => <UsersContainer/>}/>
            <Route path={routes.news} render={() => <News/>}/>
            <Route path={routes.music} render={() => <Music/>}/>
            <Route path={routes.settings} render={() => <Settings/>}/>
            <Route path={routes.login} render={() => <Login/>}/>
        </div>
    );
};

export default RoutesApp;