import {addPost, state, stateAllPropsType, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


export type AppPropsType = {
    state: stateAllPropsType
    addPost: (message: string) => void
    updateNewPostText: (message: string) => void
}

export const renderTree = (props: any) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );

}