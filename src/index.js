import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/bootstrap-grid.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const users = [
  {name: 'Dima', id: 1},
  {name: 'Jenya', id: 2},
  {name: 'Sasha', id: 3},
  {name: 'Petya', id: 4},
  {name: 'Egor', id: 5}
]
const messages = [
  {message: 'Hello!', id: 1},
  {message: 'How are you?', id: 2},
  {message: 'I\'m allright and you?', id: 3},
  {message: 'I\'m fine, thanks!', id: 4}
]

let postMessages = [
  {massage: 'Hello!', id: 1, likesCount: 22},
  {massage: 'Hello world!', id: 2, likesCount: 5},
  {massage: 'Hello user!', id: 3, likesCount: 7}
]

ReactDOM.render(
  <React.StrictMode>
    <App users={users} messages={messages} postMessages={postMessages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
