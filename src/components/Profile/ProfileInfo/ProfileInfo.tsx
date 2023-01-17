import React from 'react';
// @ts-ignore
import classes from './ProfileInfo.module.css';


function ProfileInfo() {
    return(
        <div>
            <div className={classes.profileInfo}>
                <div className={classes.imgBlock}><img src='https://arthive.net/res/media/img/oy1200/work/b31/46527@2x.jpg'/></div>
                <div className={classes.description}>Description</div>
            </div>
        </div>
    );
}

export default ProfileInfo;