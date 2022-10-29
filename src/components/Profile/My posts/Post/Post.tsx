import React from 'react';
import classes from './Post.module.css';

type propsType = {
    message: string
    likeCount: number
}
function Post(props: propsType) {
    return(
        <div className={`${classes.item}`}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1x0NMouR9cfq-Z-zgSckOHAaalK1ylAl1zA&usqp=CAU'/>
            {props.message}
            <div><span>like {props.likeCount}</span></div>
        </div>

    );
}

export default Post;