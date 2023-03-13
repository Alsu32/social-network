import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusWithHook} from "./ProfileStatusWithStatus";


function ProfileInfo(props:any) {
    if(!props.profile) {return <Preloader/>}

    return(
        <div>
            <div className={classes.profileInfo}>
                <div className={classes.imgBlock}><img src='https://arthive.net/res/media/img/oy1200/work/b31/46527@2x.jpg'/></div>
                <div className={classes.description}>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;