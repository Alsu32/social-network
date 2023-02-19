import React from 'react';
import {FormDataType, LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppRootPropsType} from "../../Redux/redux-store";

const Login = (props: any) => {
    const onSubmitHandler = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LoginPage</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppRootPropsType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);