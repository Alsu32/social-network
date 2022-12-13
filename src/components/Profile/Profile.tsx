import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

type stateProfilePage = {
    stateProps:any
    //stateProfilePage: ProfilePagePropsType
   // dispatch:(action: ActionsType)=>void
}

function Profile(props:stateProfilePage) {

    return(
        <main className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer
                stateProps={props.stateProps}
                //postsData={props.stateProfilePage.postsData}
                //newPostText={props.stateProfilePage.newPostText}
                //dispatch={props.dispatch}
            />
        </main>
    );
}

export default Profile;