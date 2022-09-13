import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    state: InitialStateType
    newMessageBody: string
    // isAuth: boolean
}
type MapDispatchPropType = {
    updateNewMessageBody: (body: string) => void
    SendMessage: () => void
}




let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.dialogs,
        newMessageBody: state.dialogs.newMessageBody,
        // isAuth: state.auth.isAuth
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

let AuthRedirectComponent = WithAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
