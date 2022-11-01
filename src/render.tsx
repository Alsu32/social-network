import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StatePropsType} from './App';
import state, {addPost} from "./Redux/state";


export const renderTree = (state:StatePropsType)=>{
    ReactDOM.render(
        <App states={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}
