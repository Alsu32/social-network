import React from 'react';
import classes from './Message.module.css';

export type MessagePropsType = {
    id?:number
    message: string
}

function Message(props: MessagePropsType) {
    return(
        <div className={classes.message}>{props.message}</div>

    );
}

export default Message;