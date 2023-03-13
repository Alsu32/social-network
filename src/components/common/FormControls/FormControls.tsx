import React from 'react';
// @ts-ignore
import styles from './FormControls.module.css'

export const Textarea: React.FC<any> = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error
    return (
        <div className={styles.formControls + " " + ( error ? styles.error : " ")}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            { error && <span>{meta.error}</span>}
        </div>
    );
};
export const Input: React.FC<any> = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error
    return (
        <div className={styles.formControls + " " + ( error ? styles.error : " ")}>
            <div>
                <input {...props} {...input}/>
            </div>
            { error && <span>{meta.error}</span>}
        </div>
    );
};