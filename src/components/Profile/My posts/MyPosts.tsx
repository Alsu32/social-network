import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi! How are you?' like='15'/>
                <Post message='It`s my first post' like='25'/>
            </div>
        </div>


    );
}

export default MyPosts;