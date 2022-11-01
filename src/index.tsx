import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StatePropsType} from './App';
import state from "./Redux/state";
import {renderTree} from "./render";


renderTree(state)