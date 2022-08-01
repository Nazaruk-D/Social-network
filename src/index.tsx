import React from 'react';
import './index.css';
import {store, stateAllPropsType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


export type AppPropsType = {
    // state: stateAllPropsType
    // addPost: () => void
    // updateNewPostText: (message: string) => void
}

export const renderTree = (props: stateAllPropsType) => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}


renderTree(store.getState());
store.subscribe(renderTree);
