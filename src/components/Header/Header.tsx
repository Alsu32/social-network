import React from 'react';
import classes from './Header.module.css';

function Header() {
    return(
        <header className={classes.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHD-t5vClnQN7-yiojM4GUl0vT1gK7mnOSw&usqp=CAU'/>
        </header>
    );
}

export default Header;