import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



function Dialogs() {
    let dialogsData = [{id: 1,name: 'Anna'}, {id: 2, name: 'Denis'}, {id: 3, name: 'Mary'}, {id: 4,name: 'Nik'},  { d: 5, name: 'Sofia'}]
    let messageData = [{id: 1,message: 'Hi!'}, {id: 2, message: 'How about meeting?'}, {id: 3, message: "'It's good idea!"}, {id: 4,message: 'I am free on Saturday:)'}]

    const dialogsItem = dialogsData.map(dialog=><Dialog name={dialog.name} id={dialog.id}/>)
    const massegesElement = messageData.map(message=><Message message={message.message}/>)

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