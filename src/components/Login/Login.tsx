import React from 'react';
import {FormDataType, LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";

const Login = () => {
    const onSubmitHandler = (formData:FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LoginPage</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

export default Login;

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)