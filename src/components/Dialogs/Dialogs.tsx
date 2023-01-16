import React, {ChangeEvent} from 'react';
// @ts-ignore
import classes from './Dialogs.module.css';
import Dialog, {PropsDialogType} from "./Dialog/Dialog";
import Message from "./Message/Message";
import {MessagePropsType} from "../../Redux/messageReducer";


type stateProfilePage = {
    sendMessage:()=>void
    onChangeNewMessageText:(value:string)=>void
    dialogsData: Array<PropsDialogType>
    messageData: Array<MessagePropsType>
    newMessageText:string
}

function Dialogs(props:stateProfilePage) {

    const dialogsItem = props.dialogsData.map(dialog=><Dialog name={dialog.name} id={dialog.id}/>)
    const massegesElement = props.messageData.map(message=><Message message={message.message}/>)
    const newMessageElement = props.newMessageText

    const onSendMessageClick = ()=> {props.sendMessage()}
    const onChangeNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        props.onChangeNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsItem}
            </div>
            <div className={classes.messages}>
                <div>{massegesElement}</div>
                <div>
                    <div><textarea
                        value = {newMessageElement}
                        placeholder="Enter your message"
                        onChange={onChangeNewMessageText}/>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;