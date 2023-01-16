import React from 'react';
import {MessagesPagePropsType, sendMessageAC, updateNewMessageAC} from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {AppRootPropsType} from "../../Redux/redux-store";


function DialogsContainer() {
    const messagesPage = useSelector<AppRootPropsType, MessagesPagePropsType>(state=> state.messagesPage)
    const dispatch = useDispatch()

    const onSendMessageClick = ()=> {dispatch(sendMessageAC())}
    const onChangeNewMessageText = (value:string)=> {dispatch(updateNewMessageAC(value))}

    return (
        <Dialogs sendMessage={onSendMessageClick} onChangeNewMessageText={onChangeNewMessageText}
                 dialogsData={messagesPage.dialogsData} messageData={messagesPage.messageData}
                 newMessageText={messagesPage.newMessageText} />

    );
}

export default DialogsContainer;