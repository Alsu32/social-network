import React from 'react';
// @ts-ignore
import classes from './Post.module.css';
import {PostType} from "../MyPosts";


function Post(props: PostType) {
    return(
        <div className={`${classes.item}`}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1x0NMouR9cfq-Z-zgSckOHAaalK1ylAl1zA&usqp=CAU'/>
            {props.post}
            <div><span>like {props.likeCount}</span></div>
        </div>

    );
}

export default Post;