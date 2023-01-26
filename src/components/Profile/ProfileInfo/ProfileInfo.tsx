import React from 'react';
// @ts-ignore
import classes from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";


function ProfileInfo(props:any) {
    if(!props.profile) {
        return <Preloader/>
    }
    return(
        <div>
            <div className={classes.profileInfo}>
                <div className={classes.imgBlock}><img src='https://arthive.net/res/media/img/oy1200/work/b31/46527@2x.jpg'/></div>
                <div className={classes.description}>
                    <img src={props.profile.photos.large}/>
                    Description
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;