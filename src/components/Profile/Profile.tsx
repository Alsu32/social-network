import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./My posts/MyPosts";

function Profile() {
    return(
        <main className={classes.content}>
            <img className={classes.img1} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8G4L85qzEx1MB2ALteQleMxG7m4ngAnNPxQ&usqp=CAU'/>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'/>
                Description
            </div>
            <MyPosts/>
        </main>
    );
}

export default Profile;