import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {deleteMessage, InitialStateType, sendMessageCreator} from "../../redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    dialogs: InitialStateType
}
type MapDispatchPropType = {
    SendMessage: (newMessageBody: string, userId: string) => void
    DeleteMessage: (friendsId: string, messageId: string) => void
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogs,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropType => {
    return {
        SendMessage: (newMessageBody: string, userId: string) => {
            dispatch(sendMessageCreator(newMessageBody, userId))
        },
        DeleteMessage: (friendsId: string, messageId: string) => {
            dispatch(deleteMessage(friendsId, messageId))
        }
    }
}


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)

