import React, {ChangeEvent} from 'react';
// @ts-ignore
import classes from './Dialogs.module.css';
import Dialog, {PropsDialogType} from "./Dialog/Dialog";
import Message from "./Message/Message";
import {MessagePropsType, MessagesPagePropsType} from "../../Redux/messageReducer";
import {Redirect} from "react-router-dom";


type stateProfilePage = {
    onSendMessageClick:()=>void
    onChangeNewMessageText:(value:string)=>void
    messagePage: MessagesPagePropsType
    isAuth: boolean
}

function Dialogs(props:stateProfilePage) {

    const dialogsItem = props.messagePage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    const massegesElement = props.messagePage.messageData.map(message=><Message message={message.message}/>)
    const newMessageElement = props.messagePage.newMessageText

    const onSendMessageClick = ()=> {props.onSendMessageClick()}
    const onChangeNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        props.onChangeNewMessageText(e.currentTarget.value)
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

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