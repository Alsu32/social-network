import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validator";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='login' placeholder='Login' component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name='password' placeholder='Password' component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name='rememberMe' type='checkbox' component={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    );
};