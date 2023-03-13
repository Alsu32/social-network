import React from 'react';
// @ts-ignore
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormControls/FormControls";

//components
export function MyPosts(props: PostsPropsType) {
    const postElements = props.postsData.map(p => <Post key={p.id} post={p.post} likeCount={p.likeCount}/>)
    const addPost = (value:PostFormType) => {
        props.addPostAC(value.postText)
    }

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3 className={classes.postsTitle}>My posts</h3>
                <AddPostReduxForm onSubmit={addPost}/>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}
const maxLength10 = maxLengthCreator(10)
export const AddPostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'postText'} validate={[required, maxLength10]} placeholder={'add new post'}/>
            <div>
                <button className={classes.Button}>Add post</button>
            </div>
        </form>
    )
}
export const AddPostReduxForm = reduxForm<PostFormType>({form: 'ProfileAddNewPostForm'})(AddPostForm)
//types
export type PostsPropsType = {
    postsData: Array<PostType>
    addPostAC: (postText: string) => void
}
export type PostType = {
    id?: number
    likeCount: number
    post: string
}
type PostFormType = {
    postText: string
}