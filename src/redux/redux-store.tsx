// import {combineReducers, createStore} from "redux";
// import {combineReducers, createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

import {combineReducers, legacy_createStore as createStore} from "redux";


let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
})


export let store  = createStore(reducers);



