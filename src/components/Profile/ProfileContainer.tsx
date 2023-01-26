import React from 'react';
// @ts-ignore
import styles from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }
    render () {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props}  />
        );
    }

};

let mapStateToProps = (state:any) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth
})

let WithUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);