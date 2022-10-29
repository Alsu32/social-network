import React from 'react';
import classes from './Profile.module.css';
import MyPosts, {PostsPropsType} from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props:PostsPropsType) {

    return(
        <main className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </main>
    );
}

export default Profile;