import React from "react";
// @ts-ignore
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";


export type PropsDialogType = {
    name: string
    id: number
}

function Dialog(props:PropsDialogType) {

    let path='/dialogs/'+ props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;