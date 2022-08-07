import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {stateAllPropsType} from "./redux/store";


export type AppPropsType = {
    // state: stateAllPropsType
    // addPost: () => void
    // updateNewPostText: (message: string) => void
}

// export const renderTree = (props: stateAllPropsType) => {
export const renderTree = (props: any) => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}


renderTree(store.getState());
// store.subscribe(()=>  renderTree(store.getState()  )  );
store.subscribe(()=> {
    let state = store.getState()
    renderTree(state)
} );
