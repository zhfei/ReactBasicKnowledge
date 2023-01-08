import React from 'react';
import ReactDOM from 'react-dom';


const ele = React.createElement('h1', {title: '文章的标题'}, 'Hello React')

ReactDOM.render(ele, document.getElementById('root'))