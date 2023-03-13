import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

//const setActive = ({isActive: boolean}) => isActive ? classes.active : ""

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <Friends/>
        </nav>
    );
}

export default Navbar;

