import React from 'react';
// @ts-ignore
import classes from './Post.module.css';
import {PostType} from "../MyPosts";


function Post(props: PostType) {
    return(
        <div className={`${classes.item}`}>
            <img src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ca6be0783c9ec4079089b93816f1b44e.jpg/s/s400x400/a/17858/sc/159'/>
            {props.post}
            <div><span>like {props.likeCount}</span></div>
        </div>

    );
}

export default Post;