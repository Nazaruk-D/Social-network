import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, StoreType} from "./redux/state";



type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}


const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header
                    img={"https://www.eurohandball.com/media/f45ofcxo/ehf_og_image2.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132375557452270000"}/>
                <Nav profile={"Profile"}
                     message={"Message"}
                     news={"News"}
                     music={"Music"}
                     settings={"Settings"}
                     friends={state.dialogsPage.dialogsData}/>
                <div className={"app-wrapper-content"}>
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogsData={state.dialogsPage.dialogsData}
                                                  messageData={state.dialogsPage.messagesData}
                                                  newMessageBody={state.dialogsPage.newMessageBody}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/profile" render={() => <Profile postData={state.profilePage.postData}
                                                                  newPostText={state.profilePage.newPostText}
                                                                  dispatch={props.dispatch}
                                                                  // addPost={props.store.addPost.bind(props.store)}
                                                                  // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                    />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
