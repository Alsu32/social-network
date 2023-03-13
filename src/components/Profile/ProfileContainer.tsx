import React from 'react';
// @ts-ignore
import styles from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profileReducer";
import {AppRootPropsType} from "../../Redux/redux-store";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        /*let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }*/
        let userId = this.props.authorizedUserId
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}  />
        )
    }
}

let mapStateToProps = (state: AppRootPropsType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    WithAuthRedirect
)(ProfileContainer)

//withRouter