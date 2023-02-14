import React, {Component, ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootPropsType} from "../Redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state:AppRootPropsType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect(Component: ComponentType<any>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return (
        ConnectedRedirectComponent
    );
};

