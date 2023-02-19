import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import {AppRootPropsType} from "../../Redux/redux-store";


class HeaderContainer extends React.Component<any, any> {

    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:AppRootPropsType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect (mapStateToProps, {logout}) (HeaderContainer);