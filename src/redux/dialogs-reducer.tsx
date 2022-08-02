import {v1} from "uuid";

export const dialogsReducer = (state: any, action: any) => {
    if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.newMessageBody = action.body;
    }else if (action.type === "SEND-MESSAGE") {
        let body = state.newMessageBody;
       state.newMessageBody = "";
        state.messagesData.push({
            id: v1(),
            name: "Nik",
            message: body,
            ava: "https://sun9-87.userapi.com/impf/Eogwstp_bkOHIExnjagUp11ldCVcDEk-F4-1tQ/r4g7vO7wZPA.jpg?size=1620x2160&quality=96&sign=97beace1cb4a87950bdd50a012c5a128&type=album"
        })
    }
    return state;
}
