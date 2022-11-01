import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

export type PostsPropsType = {
    postsData: Array<PostType>
    addPost: (postMessage:string)=>void
}

export type PostType = {
    id?: number
    likeCount:number
    post:string
}

function MyPosts(props:PostsPropsType) {

    const postElements = props.postsData.map(p => <Post post={p.post} likeCount={p.likeCount}/>)
    const postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = ()=> {
        postMessageRef.current && props.addPost(postMessageRef.current.value)
    }
    return (
        <div className={classes.postsBlock}>
            <div>
                <h3 className={classes.postsTitle}>My posts</h3>
                <div><textarea ref={postMessageRef}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>


    );
}

export default MyPosts;