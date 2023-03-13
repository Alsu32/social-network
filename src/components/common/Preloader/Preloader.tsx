import React from 'react';
// @ts-ignore
import styles from "../../Users/Users.module.css";

const Preloader = () => {
    return (
        <>
            <div className={styles.loadingPage}>Loading...</div>
            <span className={styles.loader}></span>
        </>
    );
};

export default Preloader;