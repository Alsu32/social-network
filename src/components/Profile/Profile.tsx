import React from 'react';
// @ts-ignore
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

export const Profile = (props:any) => {

    return (
        <main className={styles.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateUserStatus}/>
            <MyPostsContainer />
        </main>
    );
}

