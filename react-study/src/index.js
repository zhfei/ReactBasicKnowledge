
/*
React: 创建,修改React组件，管理组件的生命周期
ReactDOM: 操作真实Dom， 将虚拟Dom渲染到真实的Dom之上。
*/
import React from "react";
import ReactDOM from "react-dom";
import World from "./components/World.jsx";

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


/*
    babel碰到<>按照html的语义， 使用React.createElement进行解析
    碰到{}会按照js进行解析, {}中只能存放一个带返回值的js语句
*/

var list = []
for (let i = 0; i < 10; i++) {
    var p = <p key={i} >这是for循环生成的p标签</p>
    list.push(p)
}

var myTitle = "这是标题的title"
var h2D = <div>
    这是一个jsx的h2标题
    <h1 title={ myTitle }>JSX真好用</h1>
    { list }
    {/* 这是jsx中的注释 */}
</div>



var divD = React.createElement("div", {title:"这是一个div", id:"rootSub"},"这是一个React创建的div", h2D)
var person = {
    name: 'jack',
    age: 30,
    address: '北京'
}

/*
    React中，构造函数就是一个最基本的组件, 使用时把构造函数的名称当做html标签名使用。
    React自定义的组件必须是大写字母开头，小写字母编译器默认是浏览器提供的组件。会从浏览器中去查找。
*/
function Hello() {
    return <div>
        这是使用Hello构造函数 创建的基本组件Hello
    </div>
}

/*
将react元素渲染到页面对应的位置上。
*/
ReactDOM.render(<div>
    {divD}
    <Hello></Hello>
    {/* 如果传递的参数是个对象，可以进行对对象进行属性扩散进行批量传参 */}
    <World {...person}></World>
</div>, document.getElementById("root"))


