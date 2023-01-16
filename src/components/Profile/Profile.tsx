import React from 'react';
// @ts-ignore
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";


export const Profile = () => {

    return(
        <main className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </main>
    );
}

