import React from 'react';
// @ts-ignore
import classes from './Message.module.css';
import {MessagePropsType} from "../../../Redux/messageReducer";



function Message(props: MessagePropsType) {
    debugger
    return(
        <div className={classes.message}>{props.message}</div>

    );
}

export default Message;