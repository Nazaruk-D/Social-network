import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";



type PropsType = {
    store: any
    // dispatch: (action: ActionsTypes) => void
}


const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();
    // console.log("state:", state);
    // console.log("props:", props);
    return (

            <div className="app-wrapper">
                <Header
                    img={"https://www.eurohandball.com/media/f45ofcxo/ehf_og_image2.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132375557452270000"}/>
                <Nav profile={"Profile"}
                     message={"Message"}
                     news={"News"}
                     music={"Music"}
                     settings={"Settings"}
                     friends={state.dialogs.dialogsData}
                />
                <div className={"app-wrapper-content"}>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}
                    />
                    <Route path="/profile" render={() => <Profile store={props.store}
                    />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>

    );
}


export default App;
