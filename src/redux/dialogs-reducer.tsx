import {v1} from "uuid";
import {formatDate} from "../utils/formatDate/formatDate";

export type Message = {
    idMessage: string
    message: string
    dataMessage: string
    myPost: boolean
}

export type DialogsDataType = {
    id: string
    name: string
    messages: Message[]
    ava: string
}


export type InitialStateType = DialogsDataType[]

type ActionTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof deleteMessage>

export let initialState: InitialStateType = [
    {
        id: v1(),
        name: "Dima",
        messages: [
            {
                idMessage: v1(),
                message: "Dima This is my first Message Dima This is my first Message ",
                dataMessage: formatDate(new Date()),
                myPost: true,
            },
            {idMessage: v1(), message: "Ok", dataMessage: formatDate(new Date()), myPost: false},
            {idMessage: v1(), message: "And what?", dataMessage: formatDate(new Date()), myPost: true},
            {idMessage: v1(), message: "No problem man", dataMessage: formatDate(new Date()), myPost: false},
        ],
        ava: "https://sun9-25.userapi.com/impf/buEzh8PYEnECuHx5lpnyeUNZQti1GQ57ZiBe0g/aV3GO_nKKZw.jpg?size=1437x2160&quality=96&sign=2fb1d9e7e4c3ebbcffc2253d4038045a&type=album"
    },
    {
        id: v1(),
        name: "Alex",
        messages: [
            {idMessage: v1(), message: "Alex This is my first Message", dataMessage: formatDate(new Date()), myPost: true},
            {idMessage: v1(), message: "Ok", dataMessage: formatDate(new Date()), myPost: false},
            {idMessage: v1(), message: "And what?", dataMessage: formatDate(new Date()), myPost: true},
            {idMessage: v1(), message: "No problem man", dataMessage: formatDate(new Date()), myPost: false},
        ],
        ava: "https://sun9-83.userapi.com/impf/VqDnLRSs8cSUDXKaywkOtesMpvnb7_vB52pPFA/ZhmNw9szl7U.jpg?size=1152x1159&quality=96&sign=03f1f5a5c7cad12afcc7472ca032764b&type=album"
    },
    {
        id: v1(),
        name: "Kate",
        messages: [
            {idMessage: v1(), message: "Kate This is my first Message", dataMessage: formatDate(new Date()), myPost: true},
            {idMessage: v1(), message: "Ok", dataMessage: formatDate(new Date()), myPost: false},
            {idMessage: v1(), message: "And what?", dataMessage: formatDate(new Date()), myPost: true},
            {idMessage: v1(), message: "No problem man", dataMessage: formatDate(new Date()), myPost: false},
        ],
        ava: "https://sun9-10.userapi.com/impf/yi2H7mFm7MjtdJqHxbJguaxGGmDgd5fA8TwLpA/doNo0rdlyPw.jpg?size=1712x2160&quality=96&sign=c6b40689ba0ff6bf500e26b9a900e202&type=album"
    },
    {
        id: v1(),
        name: "Nik",
        messages: [
            {idMessage: v1(), message: "Nik This is my first Message", dataMessage: formatDate(new Date()), myPost: true},
            {idMessage: v1(), message: "Ok", dataMessage: formatDate(new Date()), myPost: false},
            {idMessage: v1(), message: "And what?", dataMessage: formatDate(new Date()), myPost: true},
            {idMessage: v1(), message: "No problem man", dataMessage: formatDate(new Date()), myPost: false},
        ],
        ava: "https://sun9-87.userapi.com/impf/Eogwstp_bkOHIExnjagUp11ldCVcDEk-F4-1tQ/r4g7vO7wZPA.jpg?size=1620x2160&quality=96&sign=97beace1cb4a87950bdd50a012c5a128&type=album"
    },
]


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case "SEND-MESSAGE":
            let newMessage = {idMessage: v1(), message: action.newMessageBody, dataMessage: formatDate(new Date()), myPost: true}
            return state.map( u => u.id === action.userId ? {...u, messages: [...u.messages, newMessage]} : u)
        case "DELETE-MESSAGE": {
            debugger
            return state.map( u => u.id === action.friendsId ? {...u, messages: u.messages.filter(m => m.idMessage !== action.messageId)} : u)
        }
        default:
            return state;
    }
}



export const sendMessageCreator = (newMessageBody: string, userId: string) => ({
    type: "SEND-MESSAGE",
    newMessageBody,
    userId
} as const)
export const deleteMessage = (friendsId: string, messageId: string) => ({
    type: "DELETE-MESSAGE",
    friendsId,
    messageId
} as const)