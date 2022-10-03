import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import {DialogsDataType} from "./redux/dialogs-reducer";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


// type PropsType = {
//     // store: any
//     authThunk: () => void
// }

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
        // const state = this.props.store.getState();
        // console.log("state:", state);
        // console.log("props:", props);

        if (!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav profile={"Profile"}
                     message={"Message"}
                     news={"News"}
                     users={"Users"}
                     music={"Music"}
                     settings={"Settings"}
                     friends={this.props.dialogsData}
                />
                <div className={"app-wrapper-content"}>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    dialogsData: state.dialogs.dialogsData,
    initialized: state.app.initialized
})

// export default App;
export default compose(
    // withRouter,
    connect(mapStateToProps, {initThunk: initializeApp})(App)
);