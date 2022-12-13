import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StatePropsType} from './App';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = (state:StatePropsType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App states={state} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>, document.getElementById('root')
    );
}
renderEntireTree(store.getState())

store.subscribe(()=> {
    let state = store.getState()
    renderEntireTree(state)
})

