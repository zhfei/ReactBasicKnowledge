// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//使用ES6的模块导入模式替换原本<script>标题导入的方式
import React from "react";
import ReactDom from "react-dom";

import "./artile.css";
import HelloWorld from "./my-src/HelloWorld";
import State from "./my-src/State";
import Form from "./my-src/Form";
import ComponentApp from "./my-src/ComponentApp";
import PropsTest from "./my-src/PropsTest";
import PropsAgainTest from "./my-src/PropsAgainTest";
import LifeCircle from "./my-src/LifeCircle"
import ReUseComponent from "./my-src/ReUseComponent"
import Principle from "./my-src/Principle"
import RouterApp from "./my-src/RouterApp"

let p = React.createElement('h1',null,"hello React !!")
let p2 = <h1>"hello React !!"</h1>



const shucai = "白醋"

let loading = false
//条件渲染
//if else表达式
let loadData = () => {
  if (loading) {
    return <h4>加载中...</h4>
  } else {
    return <h4>加载完成</h4>
  }
}
//三元运算符
loadData = () => {
  return loading ? <h4>加载中...</h4> : <h4>加载完成</h4>
}
//逻辑运算符
loadData = () => {
  return loading && <h4>加载中...</h4>
}

//列表渲染
const songs = [
    {id:1,name:"大约在冬季"},
    {id:2,name:"菊花台"},
    {id:3,name:"捉泥鳅"}]

//样式渲染
const artile = function () {
  return <p className="title" style={{color:"red", textAlign:"center"}}>这是一篇文章</p>
}



const container = (
    <div>
      <h2>{shucai}</h2>
      <h3>{p}</h3>
      {loadData()}
      {songs.map((item)=><li key={item.id}>{item.name}</li>)}
      {artile()}
    </div>
)
// ReactDom.render(container, document.getElementById("root"))

// ReactDom.render(<HelloWorld />, document.getElementById("root"))

// ReactDom.render(<State />, document.getElementById("root"))

// ReactDom.render(<Form />, document.getElementById("root"))

// ReactDom.render(<ComponentApp />, document.getElementById("root"))

// ReactDom.render(
//     <PropsTest name={"jack"}
//                age={30}
//                fn={()=>console.log("这是一个函数")}
//                list={["red","blue","green"]}/>,
//     document.getElementById("root"))

// ReactDom.render(<PropsAgainTest />, document.getElementById("root"))

// ReactDom.render(<LifeCircle />, document.getElementById("root"))

// ReactDom.render(<ReUseComponent />, document.getElementById("root"))

// ReactDom.render(<Principle />, document.getElementById("root"))

ReactDom.render(<RouterApp />, document.getElementById("root"))




