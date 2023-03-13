import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initialize} from "./Redux/app-reducer";
import {AppRootPropsType} from "./Redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component<any> {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-main'>
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state: AppRootPropsType) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initialize})(App);
