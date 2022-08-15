import {v1} from "uuid";
import {postDataPropsType} from "./profile-reducer";

export type MessagesDataType = {
    id: string
    name: string,
    message: string
    ava: string
}
export type DialogsDataType = {
    id: string
    name: string
    message: string
    ava: string
}
export type InitialStateType = {
    messagesData: Array<MessagesDataType>,
    newMessageBody: string,
    dialogsData: Array<DialogsDataType>,
}

export let initialState = {
    messagesData: [
        {
            id: v1(),
            name: "Dima",
            message: "Hello",
            ava: "https://sun9-25.userapi.com/impf/buEzh8PYEnECuHx5lpnyeUNZQti1GQ57ZiBe0g/aV3GO_nKKZw.jpg?size=1437x2160&quality=96&sign=2fb1d9e7e4c3ebbcffc2253d4038045a&type=album"
        },
        {
            id: v1(),
            name: "Alex",
            message: "Hello!!!!",
            ava: "https://sun9-83.userapi.com/impf/VqDnLRSs8cSUDXKaywkOtesMpvnb7_vB52pPFA/ZhmNw9szl7U.jpg?size=1152x1159&quality=96&sign=03f1f5a5c7cad12afcc7472ca032764b&type=album"
        },
        {
            id: v1(),
            name: "Kate",
            message: "Hello, Guys",
            ava: "https://sun9-10.userapi.com/impf/yi2H7mFm7MjtdJqHxbJguaxGGmDgd5fA8TwLpA/doNo0rdlyPw.jpg?size=1712x2160&quality=96&sign=c6b40689ba0ff6bf500e26b9a900e202&type=album"
        },
        {
            id: v1(),
            name: "Nik",
            message: "Oyyyeeee",
            ava: "https://sun9-87.userapi.com/impf/Eogwstp_bkOHIExnjagUp11ldCVcDEk-F4-1tQ/r4g7vO7wZPA.jpg?size=1620x2160&quality=96&sign=97beace1cb4a87950bdd50a012c5a128&type=album"
        },
    ],
    newMessageBody: "",
    dialogsData: [
        {
            id: v1(),
            name: "Dima",
            message: "Hello",
            ava: "https://sun9-25.userapi.com/impf/buEzh8PYEnECuHx5lpnyeUNZQti1GQ57ZiBe0g/aV3GO_nKKZw.jpg?size=1437x2160&quality=96&sign=2fb1d9e7e4c3ebbcffc2253d4038045a&type=album"
        },
        {
            id: v1(),
            name: "Alex",
            message: "Hello!!!!",
            ava: "https://sun9-83.userapi.com/impf/VqDnLRSs8cSUDXKaywkOtesMpvnb7_vB52pPFA/ZhmNw9szl7U.jpg?size=1152x1159&quality=96&sign=03f1f5a5c7cad12afcc7472ca032764b&type=album"
        },
        {
            id: v1(),
            name: "Kate",
            message: "Hello, Guys",
            ava: "https://sun9-10.userapi.com/impf/yi2H7mFm7MjtdJqHxbJguaxGGmDgd5fA8TwLpA/doNo0rdlyPw.jpg?size=1712x2160&quality=96&sign=c6b40689ba0ff6bf500e26b9a900e202&type=album"
        },
        {
            id: v1(),
            name: "Nik",
            message: "Oyyyeeee",
            ava: "https://sun9-87.userapi.com/impf/Eogwstp_bkOHIExnjagUp11ldCVcDEk-F4-1tQ/r4g7vO7wZPA.jpg?size=1620x2160&quality=96&sign=97beace1cb4a87950bdd50a012c5a128&type=album"
        },
    ]
}

export const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            // let stateCopy = {...state}
            let body = state.newMessageBody;
            let newMessage = {
                id: v1(),
                name: "Nik",
                message: body,
                ava: "https://sun9-87.userapi.com/impf/Eogwstp_bkOHIExnjagUp11ldCVcDEk-F4-1tQ/r4g7vO7wZPA.jpg?size=1620x2160&quality=96&sign=97beace1cb4a87950bdd50a012c5a128&type=album"
            }
            // stateCopy.messagesData = [...state.messagesData]
            // stateCopy.messagesData.push(newMessage)
            // stateCopy.newMessageBody = "";
            // return stateCopy
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageBody: ""
            }
        case "UPDATE-NEW-MESSAGE-BODY":
            return {...state, newMessageBody: action.body}
        default:
            return state;
    }
}