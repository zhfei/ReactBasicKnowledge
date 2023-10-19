
import React from "react";
import ReactDOM from "react-dom";

import Hello from "./components/Hello.jsx";
import Hello1 from "./components/Hello1.jsx";


var h1Dom = React.createElement("h2", {title:"hello, jsx的h1"}, '这是jsx的子元素')




/*
函数组件与类组件的区别
函数组件内部没有state, 只有从外部传入的props
类组件内部有state和props, 并且通过setState更新数据可以刷新UI界面
结论：
1.函数组件是无状态组件，类组件是有状态组件
2.类组件是一个组件模板，它有生命周期。函数组件没有生命周期

如何选择使用？
1.如果组件需要保存私有状态，并根据不同的状态执行不同的逻辑，那么使用类组件。
2.如果组件只用于UI展示，那么就用函数组件。

*/


ReactDOM.render(<div>
    {h1Dom}
    <Hello name="jack" age={20}></Hello>
    <Hello1 name="jack" age={20}></Hello1>
</div>, document.getElementById("root"))


