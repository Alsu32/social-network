import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

    const postsData = [{id:1, post: 'Hi! How are you?', likeCount: 15}, {id:2, post: 'It`s my first post', likeCount: 25}]

    const postElements = postsData.map(post => <Post message={post.post} likeCount={post.likeCount}/>)



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
                {postElements}
            </div>
        </div>


    );
}

export default MyPosts;