import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*function DialogsContainer() {

    const onSendMessageClick = ()=> {dispatch(sendMessageAC())}
    const onChangeNewMessageText = (value:string)=> {dispatch(updateNewMessageAC(value))}

    return (
        <Dialogs sendMessage={onSendMessageClick} onChangeNewMessageText={onChangeNewMessageText}
                 dialogsData={messagesPage.dialogsData} messageData={messagesPage.messageData}
                 newMessageText={messagesPage.newMessageText} />

    );
}*/
let mapStateToProps = (state:any) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth
    }
}
let mapDispatchToProps = (dispatch:(action:any)=>void) => {
    return {
        onSendMessageClick: ()=> {dispatch(sendMessageAC())},
        onChangeNewMessageText: (value:string)=> {dispatch(updateNewMessageAC(value))}
    }
}

const DialogsContainer: any = connect(mapStateToProps, mapDispatchToProps) (Dialogs)
export default DialogsContainer