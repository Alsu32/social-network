import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MessagesPagePropsType} from "../../Redux/messageReducer";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

//components
export function Dialogs(props: stateProfilePage) {
    const dialogsItem = props.messagePage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    const massegesElement = props.messagePage.messageData.map(message => <Message message={message.message}/>)
    const onSendMessageClick = (value: MessageFormType) => {
        props.sendMessageAC(value.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsItem}
            </div>
            <div className={classes.messages}>
                <div>{massegesElement}</div>
                <div>
                    <AddMessageReduxForm onSubmit={onSendMessageClick}/>
                </div>
            </div>
        </div>

    );
}
const maxLength50 = maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<MessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name='newMessageBody' placeholder="Enter your message"/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}
export const AddMessageReduxForm = reduxForm<MessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)
//types
type stateProfilePage = {
    sendMessageAC: (message: string) => void
    messagePage: MessagesPagePropsType
    isAuth: boolean
}
type MessageFormType = {
    newMessageBody: string
}
