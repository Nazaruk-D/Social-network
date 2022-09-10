import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;
export let store  = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;
