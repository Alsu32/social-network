import React from 'react';
import {sendMessageAC} from "../../Redux/messageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppRootPropsType} from "../../Redux/redux-store";
import {compose} from "redux";


let mapStateToProps = (state:AppRootPropsType) => {
    return {
        messagePage: state.messagePage
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessageAC}),
    WithAuthRedirect
)(Dialogs)
