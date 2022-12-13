import {ActionsType} from "./state";
import {MessagesPagePropsType} from "../App";

const initialState = {
    dialogsData:
        [
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Denis'},
            {id: 3, name: 'Mary'},
            {id: 4, name: 'Nik'},
            {id: 5, name: 'Sofia'}
        ],
    messageData:
        [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How about meeting?'},
            {id: 3, message: "'It's good idea!"},
            {id: 4, message: 'I am free on Saturday:)'}
        ],
    newMessageText: ""
}
const messageReducer = (state:MessagesPagePropsType = initialState, action:ActionsType)=>{
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.messageText;
            return state;
        case "SEND-MESSAGE-TEXT":
            let body = state.newMessageText;
            state.newMessageText = "";
            state.messageData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const updateNewMessageAC = (messageText:string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", messageText: messageText} as const
}
export const sendMessageAC = () => {
    return {type: "SEND-MESSAGE-TEXT"} as const
}

export default messageReducer;