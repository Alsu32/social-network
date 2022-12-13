import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

export type PostsPropsType = {
    stateProps:any
}

function MyPostsContainer(props:PostsPropsType) {
    let store = props.stateProps.getState()
    const addPost = ()=> {props.stateProps.dispatch(addPostAC(store.profilePage.newPostText))}
    const onPostChange = (value:string)=>{props.stateProps.dispatch(updateNewPostAC(value))}

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange} postsData={store.profilePage.postsData}
                 newPostText={store.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;