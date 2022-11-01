import React from 'react';
import classes from './Profile.module.css';
import MyPosts, {PostsPropsType} from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../App";

type stateProfilePage = {
    stateProfilePage: ProfilePagePropsType
    addPost: (postMessage:string)=>void
}

function Profile(props:stateProfilePage) {

    return(
        <main className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.stateProfilePage.postsData} addPost={props.addPost}/>
        </main>
    );
}

export default Profile;