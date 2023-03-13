import React from 'react';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootPropsType} from "../../../Redux/redux-store";
import {addPostAC} from "../../../Redux/profileReducer";


let mapStateToProps = (state:AppRootPropsType) => {
    return {
        postsData: state.profilePage.postsData
    }
}

export default connect(mapStateToProps, {addPostAC})(MyPosts)

