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
import {
    postDataPropsType,
    dialogsDataPropsType,
    messagesDataPropsType,
} from "./redux/state";

type appPropsType = {
    state: dataPropsType
    addPost: () => void
    updateNewPostText: (message: string) => void
}
type dataPropsType = {
    dialogsPage: messagesPagePropsType
    profilePage: profilePagePropsType
}

type messagesPagePropsType = {
    dialogsData: dialogsDataPropsType[]
    messagesData: messagesDataPropsType[]
}
type profilePagePropsType = {
    postData: postDataPropsType[]
    newPostText: string
    // addPost: (message: string) => void
    // updateNewPostText: (message: string) => void
}


const App: React.FC<appPropsType> = (props) => {
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
                     friends={props.state.dialogsPage.dialogsData}/>
                <div className={"app-wrapper-content"}>
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                  messageData={props.state.dialogsPage.messagesData}/>}/>
                    <Route path="/profile" render={() => <Profile postData={props.state.profilePage.postData}
                                                                  newPostText={props.state.profilePage.newPostText}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}
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
