import {PropsDialogType} from "../components/Dialogs/Dialog/Dialog";

export type MessagesPagePropsType = {
    dialogsData: Array<PropsDialogType>
    messageData: Array<MessagePropsType>
    newMessageText: string
}
export type MessagePropsType = {
    id?:number
    message: string
}
const initialState:MessagesPagePropsType = {
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


export const messageReducer = (state:MessagesPagePropsType = initialState, action:MessageActionType)=>{
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, newMessageText: action.messageText};
        case "SEND-MESSAGE-TEXT":
            return {...state, messageData: [...state.messageData, {id: 6, message: state.newMessageText}], newMessageText: ""};
        default:
            return state;
    }
}

export type MessageActionType = updateNewMessageACType | sendMessageACType
export type updateNewMessageACType = ReturnType<typeof updateNewMessageAC>
export const updateNewMessageAC = (messageText:string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", messageText: messageText} as const
}
export type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {type: "SEND-MESSAGE-TEXT"} as const
}
