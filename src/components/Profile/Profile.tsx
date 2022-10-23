import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return(
        <main className={classes.content}>
            <ProfileInfo/>
            <MyPosts/>
        </main>
    );
}

export default Profile;