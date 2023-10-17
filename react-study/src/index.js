
/*
React: 创建,修改React组件，管理组件的生命周期
ReactDOM: 操作真实Dom， 将虚拟Dom渲染到真实的Dom之上。
*/
import React from "react";
import ReactDOM from "react-dom";

/*
在React中，不能像Vue中那样直接写html元素，要通过react的API创建元素React.createElelement()
React.createElement有三个参数，并返回一个dom对象，也就是js对象
参数一：标签名字符串
参数二：属性对象
参数三及其更多：子元素
*/

/*
    JSX的原理是什么？
    JSX是符合XML规范的JS语法
    JSX只是一个语法糖，它内部运行的时候是把类似于HTML这样的标签代码转换为React.createElement的形式。

    需要安装：npm i babel-preset-react -D
    webpack没法编译jsx代码，它会找到babel进行编译这个代码，babel发现它是react内的语法，就会调用babel-preset-react插件进行解析
*/
// var h2D = (
//     <div>
//     这是一个jsx的h2标题
// </div>
// )


var divD = React.createElement("div", {title:"这是一个div", id:"rootSub"},"这是一个React创建的div")

/*
将react元素渲染到页面对应的位置上。
*/
ReactDOM.render(divD, document.getElementById("root"))


