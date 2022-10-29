import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const postsData = [{id:1, post: 'Hi! How are you?', likeCount: 15}, {id:2, post: 'It`s my first post', likeCount: 25}]
let dialogsData = [{id: 1,name: 'Anna'}, {id: 2, name: 'Denis'}, {id: 3, name: 'Mary'}, {id: 4,name: 'Nik'},  { d: 5, name: 'Sofia'}]
let messageData = [{id: 1,message: 'Hi!'}, {id: 2, message: 'How about meeting?'}, {id: 3, message: "'It's good idea!"}, {id: 4,message: 'I am free on Saturday:)'}]

ReactDOM.render(
    <App postsData={postsData} dialogsData={dialogsData} messageData={messageData}/>,
  document.getElementById('root')
);