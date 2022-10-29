import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

export type PostsPropsType = {
    postsData: Array<PostType>
}

type PostType = {
    id: number
    likeCount:number
    post:string
}

function MyPosts(props:PostsPropsType) {

    const postElements = props.postsData.map(post => <Post message={post.post} likeCount={post.likeCount}/>)


    return (
        <div className={classes.postsBlock}>
            <div>
                <h3 className={classes.postsTitle}>My posts</h3>
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