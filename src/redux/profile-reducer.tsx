import {v1} from "uuid";
import {postDataPropsType} from "./state";

export const profileReducer = (state: any, action: any) => { // типизировать!!

    if (action.type === "ADD-POST") {
        const newPost: postDataPropsType = {
            id: v1(),
            message: state.newPostText,
            likesCount: 0,
            avatar: "https://sun9-55.userapi.com/impf/4OVa92OuK5A2PL1OkHkfDHRK41EaNgTpv860Tw/DVztYSAWFbA.jpg?size=512x512&quality=96&sign=2df645602452340721ae5fcaeffc49ae&type=album"
        }
        state.postData.push(newPost)
        state.newPostText = "";

    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.postText;
    }
    return state;
}


// if (action.type === "ADD-POST") {
//     const newPost: postDataPropsType = {
//         id: v1(),
//         message: this._state.profilePage.newPostText,
//         likesCount: 0,
//         avatar: "https://sun9-55.userapi.com/impf/4OVa92OuK5A2PL1OkHkfDHRK41EaNgTpv860Tw/DVztYSAWFbA.jpg?size=512x512&quality=96&sign=2df645602452340721ae5fcaeffc49ae&type=album"
//     }
//     this._state.profilePage.postData.push(newPost)
//     this._state.profilePage.newPostText = "";
//     this._callSubscriber()
// } else if (action.type === "UPDATE-NEW-POST-TEXT") {
//     this._state.profilePage.newPostText = action.postText;
//     this._callSubscriber()
// }