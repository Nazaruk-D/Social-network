import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Login} from "./components/Login/Login";


type PropsType = {
    store: any
}


const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();
    // console.log("state:", state);
    // console.log("props:", props);
    return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav profile={"Profile"}
                     message={"Message"}
                     news={"News"}
                     users={"Users"}
                     music={"Music"}
                     settings={"Settings"}
                     friends={state.dialogs.dialogsData}
                />
                <div className={"app-wrapper-content"}>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>

    );
}


export default App;
