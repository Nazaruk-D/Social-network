import {stateAllPropsType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderTree = (state: stateAllPropsType) => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    );

}