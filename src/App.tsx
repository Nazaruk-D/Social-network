import React from 'react';
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
import Preloader from "./components/common/Preloader/Preloader";

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
        // const state = this.props.store.getState();
        // console.log("state:", state);
        // console.log("props:", props);

        if (!this.props.initialized) {
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
                    <Route path="/dialogs" render={() => {
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