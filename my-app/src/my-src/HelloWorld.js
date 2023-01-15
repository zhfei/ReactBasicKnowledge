
import React from "react";




class MyBtn extends React.Component{
  handleClick() {
    console.log('按钮点击了')
  }

  render() {
    return (
        <button onClick={this.handleClick}>类组件按钮：点击我</button>
    )
  }
}

function MyBigBtn() {
  function handleClick(e) {
    e.preventDefault()//阻止事件默认行为
    console.log("函数按钮被点击了",e)
  }

  return (
      <button onClick={handleClick}>函数组件按钮：点击我</button>
  )
}


class HelloWorld extends React.Component {
  render() {
    return (
        <div>
          这是第一个文件抽离组件
          <MyBtn/>
          <MyBigBtn/>
        </div>
    )
  }
}

export default HelloWorld

