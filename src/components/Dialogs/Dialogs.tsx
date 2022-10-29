import React from 'react';
import classes from './Dialogs.module.css';
import Dialog, {PropsDialogType} from "./Dialog/Dialog";
import Message, {MessagePropsType} from "./Message/Message";

export type DialogsPropsType = {
    dialogsData: Array<PropsDialogType>
    messageData: Array<MessagePropsType>
}

function Dialogs(props:DialogsPropsType) {

    const dialogsItem = props.dialogsData.map(dialog=><Dialog name={dialog.name} id={dialog.id}/>)
    const massegesElement = props.messageData.map(message=><Message message={message.message}/>)

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