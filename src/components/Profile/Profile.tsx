import React from 'react';
import classes from './Profile.module.css';
import MyPosts, {PostsPropsType} from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../App";
import {updateNewPostText} from "../../Redux/state";

type stateProfilePage = {
    stateProfilePage: ProfilePagePropsType
    addPost: ()=>void
    updateNewPostText: (newText:string)=>void
}

function Profile(props:stateProfilePage) {

    return(
        <main className={classes.content}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.stateProfilePage.postsData}
                newPostText={props.stateProfilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={updateNewPostText}/>
        </main>
    );
}

export default Profile;