import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {combineReducers, legacy_createStore as createStore} from "redux";
import {usersReducer} from "./users-reducer";


let rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;
export let store  = createStore(rootReducer);

// @ts-ignore
window.store = store;
