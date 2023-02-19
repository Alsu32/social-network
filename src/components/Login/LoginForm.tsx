import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validator";
// @ts-ignore
import styles from "../common/FormControls/FormControls.module.css"
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='email' placeholder='Email' component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name='password' placeholder='Password' component={Input} validate={[required]} type='password'/>
            </div>
            <div>
                <Field name='rememberMe' type='checkbox' component={Input} /> remember me
            </div>
            { props.error && <div className={styles.commonError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    );
};