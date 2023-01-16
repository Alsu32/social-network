import React from 'react';
import {addPostAC, ProfilePostsPropsType, updateNewPostAC} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppRootPropsType} from "../../../Redux/redux-store";



function MyPostsContainer() {
    const profilePage = useSelector<AppRootPropsType, ProfilePostsPropsType>(state=> state.profilePage)
    const dispatch = useDispatch()

    const addPost = ()=> {dispatch(addPostAC(profilePage.newPostText))}
    const onPostChange = (value:string)=>{dispatch(updateNewPostAC(value))}

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange} postsData={profilePage.postsData}
                 newPostText={profilePage.newPostText}/>
    );
}

export default MyPostsContainer;