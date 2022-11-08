import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StatePropsType} from './App';
import state, {addPost, subscribe} from "./Redux/state";


const renderTree = (state:StatePropsType)=>{
    ReactDOM.render(
        <App states={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}
renderTree(state)

subscribe(renderTree)