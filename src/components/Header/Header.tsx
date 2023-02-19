import React from 'react';
// @ts-ignore
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {
    return (
        <header className={styles.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYVSFHMOFU6KysKs97vtLdUQkxv5o3PblJw&usqp=CAU'/>
            <div className={styles.login}>
                {props.isAuth
                    ? <div className={styles.loginName}>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'} className={styles.loginLink}>Login</NavLink>
                }
            </div>
        </header>
    );
}

