import React from 'react';
import './index.css';
import App from './App';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// @ts-ignore
import {createRoot} from "react-dom/client";





const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
/*ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


