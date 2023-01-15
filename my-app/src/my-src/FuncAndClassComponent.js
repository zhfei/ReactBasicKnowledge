
import React from "react";
import ReactDOM from "react-dom";

/*
  函数组件
  1.函数名称开头字母要大写, 在使用组件时是直接把函数名当做标签
  2.要有return返回值, 如果没有组件内容return null
 */
function Hello() {
  return (
      <p>这是第一个函数组件</p>
  )
}

/*
 类组件
 1.使用ES6的类class创建组件
 2.类名的首字母为大写
 3.类需要继承自React.Component
 4.必须要实现render方法，在render方法中通过return返回值或者return null
 */
class World extends React.Component {
  render() {
    return (
        <div>
          <p>这是第一个类组件</p>
        </div>
    )
  }
}

ReactDOM.render(<World/>, document.getElementById('root'))

