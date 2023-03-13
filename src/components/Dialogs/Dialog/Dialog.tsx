import React from "react";
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
            <NavLink style={{textDecoration: "none"}} to={path} >{props.name}</NavLink>
        </div>
    );
}

export default Dialog;