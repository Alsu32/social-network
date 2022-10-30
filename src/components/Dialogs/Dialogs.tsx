import React from 'react';
import classes from './Dialogs.module.css';
import Dialog, {PropsDialogType} from "./Dialog/Dialog";
import Message, {MessagePropsType} from "./Message/Message";
import {MessagesPagePropsType, ProfilePagePropsType} from "../../App";

type stateProfilePage = {
    stateMessagesPage: MessagesPagePropsType
}

function Dialogs(props:stateProfilePage) {

    const dialogsItem = props.stateMessagesPage.dialogsData.map(dialog=><Dialog name={dialog.name} id={dialog.id}/>)
    const massegesElement = props.stateMessagesPage.messageData.map(message=><Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsItem}
            </div>
            <div className={classes.messages}>
                {massegesElement}
            </div>
        </div>

    );
}

export default Dialogs;