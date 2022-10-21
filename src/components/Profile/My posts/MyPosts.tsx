import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return(
        <div className={`${classes.item}`}>
            <div>
                My posts
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi! How are you?' like = '15'/>
            <Post message='It`s my first post' like = '25'/>
        </div>


    );
}

export default MyPosts;