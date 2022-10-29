import React from "react";
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";


type propsType = {
    name: string
    id: any
}


function Dialog(props:propsType) {

    let path='/dialogs/'+ props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;