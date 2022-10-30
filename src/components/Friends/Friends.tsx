import React from 'react';
import styles from "./Friends.module.css";

const Friends = () => {

    return (
        <div className={styles.friends}>
            <h3 className={styles.title}>Friends</h3>
            <div className={styles.friendList}>
                <div className={styles.friend}>
                    <div className={styles.circle}></div>
                    <span>Andrey</span>
                </div>
                <div className={styles.friend}>
                    <div className={styles.circle}></div>
                    <span>Andrey</span>
                </div>
                <div className={styles.friend}>
                    <div className={styles.circle}></div>
                    <span>Andrey</span>
                </div>
            </div>
        </div>
    );
}

export default Friends;