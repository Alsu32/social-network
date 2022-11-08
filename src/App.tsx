import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import {PostType} from "./components/Profile/My posts/MyPosts";
import {PropsDialogType} from "./components/Dialogs/Dialog/Dialog";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import Friends from "./components/Friends/Friends";
import {updateNewPostText} from "./Redux/state";


type AppPropsType = {
    states: StatePropsType
    addPost: ()=>void
}

export type StatePropsType = {
    profilePage: ProfilePagePropsType
    messagesPage: MessagesPagePropsType
}

export type ProfilePagePropsType = {
    postsData: Array<PostType>
    newPostText: string
}

export type MessagesPagePropsType = {
    dialogsData: Array<PropsDialogType>
    messageData: Array<MessagePropsType>
}



function App(props:AppPropsType) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
            <Route path="/profile" render={()=>
                <Profile
                stateProfilePage={props.states.profilePage}
                addPost={props.addPost}
                updateNewPostText={updateNewPostText}/>}
                />
            <Route path="/dialogs" render={()=><Dialogs stateMessagesPage={props.states.messagesPage}/>}/>
            <Route path="/news" render={()=><News/>}/>
            <Route path="/music" render={()=><Music/>}/>
            <Route path="/settings" render={()=><Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
