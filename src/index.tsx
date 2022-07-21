import React from 'react';
import './index.css';
import {addPost, state, stateAllPropsType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


export type AppPropsType = {
    // state: stateAllPropsType
    // addPost: () => void
    // updateNewPostText: (message: string) => void
}

export const renderTree = (props: stateAllPropsType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}


renderTree(state);
subscribe(renderTree);