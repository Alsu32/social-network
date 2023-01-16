import React, {ChangeEvent} from 'react';
// @ts-ignore
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


export type PostsPropsType = {
    postsData: Array<PostType>
    newPostText?: string
    addPost: ()=>void
    updateNewPostText: (value:string)=>void
}
export type PostType = {
    id?: number
    likeCount:number
    post:string
}

function MyPosts(props:PostsPropsType) {

    const postElements = props.postsData.map(p => <Post post={p.post} likeCount={p.likeCount}/>)

    const addPost = ()=> {
        props.addPost()
    }
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3 className={classes.postsTitle}>My posts</h3>
                <div><textarea className={classes.textArea} onChange={onPostChange} value={props.newPostText}/></div>
                <div>
                    <button className={classes.Button} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;