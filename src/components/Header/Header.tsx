import React from 'react';
// @ts-ignore
import classes from './Header.module.css';

function Header() {
    return(
        <header className={classes.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYVSFHMOFU6KysKs97vtLdUQkxv5o3PblJw&usqp=CAU'/>
        </header>
    );
}

export default Header;