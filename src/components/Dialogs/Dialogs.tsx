import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs() {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <Dialog name='Anna' id='1'/>
                <Dialog name='Denis' id='2'/>
                <Dialog name='Mary' id='3'/>
                <Dialog name='Nik' id='4'/>
                <Dialog name='Dima' id='5'/>
                <Dialog name='Sofia' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi!'/>
                <Message message='How about meeting?'/>
                <Message message='I am free on Saturday:)'/>
            </div>
        </div>

    );
}

export default Dialogs;