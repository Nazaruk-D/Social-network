import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";


type MapStatePropsType = {
    state: InitialStateType
    newMessageBody: string
}
type MapDispatchPropType = {
    updateNewMessageBody: (body: string) => void
    SendMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.dialogs,
        newMessageBody: state.dialogs.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        SendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
