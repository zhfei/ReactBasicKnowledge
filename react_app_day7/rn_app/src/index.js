import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 路由
import {BrowserRouter, HashRouter} from 'react-router-dom'


// hash路由
// <HashRouter> <App/> </HashRouter>,
ReactDOM.render(
    //历史路由
    <BrowserRouter> <App/> </BrowserRouter>,
    document.getElementById('root')
)

// 默认
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
