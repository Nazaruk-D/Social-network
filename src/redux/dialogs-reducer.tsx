import {v1} from "uuid";

// export type MessagesDataType = {
//     id: string
//     name: string,
//     message: string
//     ava: string
// }
export type Message = {
    idMessage: string
    message: string
    dataMessage:  string
}

export type DialogsDataType = {
    id: string
    name: string
    // messages: Message[]
    messages: Array<Message>
    ava: string
}



export type InitialStateType = {
    dialogsData: Array<DialogsDataType>,
}

type ActionTypes = ReturnType<typeof SendMessageCreator>

export let initialState = {
    dialogsData: [
        {
            id: v1(),
            name: "Dima",
            messages: [
                {idMessage: "myId", message: "Dima This is my first Message Dima This is my first Message ", dataMessage: "new Date"},
                {idMessage: "friendsId", message: "Ok", dataMessage: "new Date"},
                {idMessage: "myId", message: "And what?", dataMessage: "new Date"},
                {idMessage: "friendsId", message: "No problem man", dataMessage: "new Date"},
            ],
            ava: "https://sun9-25.userapi.com/impf/buEzh8PYEnECuHx5lpnyeUNZQti1GQ57ZiBe0g/aV3GO_nKKZw.jpg?size=1437x2160&quality=96&sign=2fb1d9e7e4c3ebbcffc2253d4038045a&type=album"
        },
        {
            id: v1(),
            name: "Alex",
            messages: [
                {idMessage: "myId", message: "Alex This is my first Message", dataMessage: "new Date"},
                {idMessage: "friendsId", message: "Ok", dataMessage: "new Date"},
                {idMessage: "myId", message: "And what?", dataMessage: "new Date"},
                {idMessage: "friendsId", message: "No problem man", dataMessage: "new Date"},
            ],
            ava: "https://sun9-83.userapi.com/impf/VqDnLRSs8cSUDXKaywkOtesMpvnb7_vB52pPFA/ZhmNw9szl7U.jpg?size=1152x1159&quality=96&sign=03f1f5a5c7cad12afcc7472ca032764b&type=album"
        },
        {
            id: v1(),
            name: "Kate",
            messages: [
                {idMessage: "myId", message: "Kate This is my first Message", dataMessage: "new Date"},
                {idMessage: "friendsId", message: "Ok", dataMessage: "new Date"},
                {idMessage: "myId", message: "And what?", dataMessage: "new Date"},
                {idMessage: "friendsId", message: "No problem man", dataMessage: "new Date"},
            ],
            ava: "https://sun9-10.userapi.com/impf/yi2H7mFm7MjtdJqHxbJguaxGGmDgd5fA8TwLpA/doNo0rdlyPw.jpg?size=1712x2160&quality=96&sign=c6b40689ba0ff6bf500e26b9a900e202&type=album"
        },
        {
            id: v1(),
            name: "Nik",
            messages: [
                {idMessage: "myId", message: "Nik This is my first Message", dataMessage: "new Date"},
                {idMessage: "friendsId", message: "Ok", dataMessage: "new Date"},
                {idMessage: "myId", message: "And what?", dataMessage: "new Date"},
                {idMessage: "friendsId", message: "No problem man", dataMessage: "new Date"},
            ],
            ava: "https://sun9-87.userapi.com/impf/Eogwstp_bkOHIExnjagUp11ldCVcDEk-F4-1tQ/r4g7vO7wZPA.jpg?size=1620x2160&quality=96&sign=97beace1cb4a87950bdd50a012c5a128&type=album"
        },
    ]
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            // let body = action.newMessageBody;
            // let newMessage = {
            //     id: v1(),
            //     name: "Nik",
            //     messages: {idMessage: "myId", message: body, dataMessage: new Date()},
            //     ava: "https://sun9-87.userapi.com/impf/Eogwstp_bkOHIExnjagUp11ldCVcDEk-F4-1tQ/r4g7vO7wZPA.jpg?size=1620x2160&quality=96&sign=97beace1cb4a87950bdd50a012c5a128&type=album"
            // }
            // return {
            //     ...state,
            //     dialogsData: [...state.dialogsData, newMessage]
            // }
            let newMessage = {idMessage: "myId", message: action.newMessageBody, dataMessage: "new Date"}
            return {
                ...state,
                dialogsData: state.dialogsData.filter(u => u.id === action.userId && u.messages.push(newMessage) )
            } as InitialStateType
        default:
            return state;
    }
}


export const SendMessageCreator = (newMessageBody: string, userId: string) => ({type: "SEND-MESSAGE", newMessageBody, userId} as const)
