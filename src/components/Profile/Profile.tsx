import React from 'react';
import classes from './Profile.module.css';
import MyPosts, {PostsPropsType} from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../App";

type stateProfilePage = {
    stateProfilePage: ProfilePagePropsType
}

function Profile(props:stateProfilePage) {

    return(
        <main className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.stateProfilePage.postsData}/>
        </main>
    );
}

export default Profile;