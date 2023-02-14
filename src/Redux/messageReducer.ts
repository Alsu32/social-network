import {PropsDialogType} from "../components/Dialogs/Dialog/Dialog";

//state
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
        ]
}
//reducer
export const messageReducer = (state:MessagesPagePropsType = initialState, action:MessageActionType)=>{
    switch (action.type) {
        case "SEND-MESSAGE-TEXT":
            return {...state, messageData: [...state.messageData, {id: 6, message: action.message}]};
        default:
            return state;
    }
}
// action
export const sendMessageAC = (message: string) => {
    return {type: "SEND-MESSAGE-TEXT", message} as const
}
//types
export type MessageActionType = sendMessageACType
export type sendMessageACType = ReturnType<typeof sendMessageAC>
export type MessagesPagePropsType = {
    dialogsData: Array<PropsDialogType>
    messageData: Array<MessagePropsType>
}
export type MessagePropsType = {
    id?:number
    message: string
}
