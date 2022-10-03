import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, SendMessageCreator} from "../../redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    state: InitialStateType
    // isAuth: boolean
}
type MapDispatchPropType = {
    SendMessage: (newMessageBody: string) => void
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.dialogs,
        // isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => {
    return {
        SendMessage: (newMessageBody: string) => {
            dispatch(SendMessageCreator(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)

