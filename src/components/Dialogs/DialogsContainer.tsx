import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import Dialog, {PropsDialogType} from "./Dialog/Dialog";
import Message, {MessagePropsType} from "./Message/Message";
import {MessagesPagePropsType} from "../../App";
import {ActionsType} from "../../Redux/state";
import {sendMessageAC, updateNewMessageAC} from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";

type stateProfilePage = {
    store:any
}

function DialogsContainer(props:stateProfilePage) {
    const state = props.store.getState()

    const onSendMessageClick = ()=> {props.store.dispatch(sendMessageAC())}
    const onChangeNewMessageText = (value:string)=> {props.store.dispatch(updateNewMessageAC(value))}

    return (
        <Dialogs sendMessage={onSendMessageClick} onChangeNewMessageText={onChangeNewMessageText}
                 dialogsData={state.messagesPage.dialogsData} messageData={state.messagesPage.messageData}
                 newMessageText={state.messagesPage.newMessageText} />

    );
}

export default DialogsContainer;