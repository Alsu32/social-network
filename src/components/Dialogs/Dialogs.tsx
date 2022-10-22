import React from 'react';
import classes from './Dialogs.module.css';

function Dialogs() {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={`${classes.dialog} ${classes.active}`}>Anna</div>
                <div className={classes.dialog}>Denis</div>
                <div className={classes.dialog}>Mary</div>
                <div className={classes.dialog}>Nikolay</div>
                <div className={classes.dialog}>Dima</div>
                <div className={classes.dialog}>Sofia</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>How about meeting?</div>
                <div className={classes.message}>I am free on Saturday:)</div>
                
            </div>
        </div>

    );
}

export default Dialogs;