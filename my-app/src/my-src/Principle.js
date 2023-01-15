// React原理

import React from "react";

const ele = <h2 id={"title"}>标题</h2>

React.createElement("h2", {id:"title"}, React.createContext("标题"))

console.log(ele)

class Principle extends React.Component{
  state={
    count: 0
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //this.state: 之前的状态
    //nextState: 后面要修改的状态
    if (this.state.count === nextState.count) {
      return false
    } else {
      return true
    }
  }

  handleClick = () => {
    console.log("更新前：",this.state.count)
    this.setState({
      count: Math.floor(Math.random()*3)
    })
    // console.log("更新后1：",this.state.count)
    // this.setState({
    //   count: this.state.count + 1
    // },() => {
    //   console.log("状态更新后，DOM页面渲染后：", this.state.count)
    // })
    // console.log("更新后2：",this.state.count)


    // this.setState((state, props)=>{
    //   return {
    //     count: state.count + 1
    //   }
    // })
    // console.log("更新后1：",this.state.count)
    // this.setState((state, props)=>{
    //   return {
    //     count: state.count + 1
    //   }
    // })
    // console.log("更新后2：",this.state.count)
  }

  render() {
    return (
        <div>
          React原理
          计数总数：{this.state.count}
          <Child count={this.state.count}/>
          <PureChild count={this.state.count}/>
          <button onClick={this.handleClick}>计数+1</button>
        </div>
    );
  }
}

class Child extends React.Component{
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return this.props.count !== nextProps.count
  // }

  render() {
    console.log("子组件 render")
    return (
        <div>
          子组件入参计数：{this.props.count}
        </div>
    );
  }
}

class PureChild extends React.PureComponent{
  state = {
    obj: {
      count: 0
    },
    list: [
        "jack"
    ]
  }

  hanleClick = () => {
    this.setState({
      count: {...this.state.obj, count: 1},
      list: [...this.state.list, "lucy"]
    })
  }

  render() {
    console.log("纯子组件 render")
    return (
        <div>
          纯子组件入参计数：{this.props.count}
        </div>
    );
  }
}

export default Principle




