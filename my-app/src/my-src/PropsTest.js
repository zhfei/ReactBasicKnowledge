
import React from "react";

const {Provider, Consumer} = React.createContext()

class PropsTest extends React.Component{
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    // props中的属性不能修改
    // this.props.name = "lucy"

    console.log(this.props)
    let {name, age} = this.props
    return (
        <div>
          类组件名字: {name}
          <br/>
          类组件年龄: {age}
          <Parent/>
        </div>
    );
  }
}

// function PropsTest(props) {
//   return (
//       <div>
//            函数组件名字: {props.name}
//            <br/>
//            函数组件年龄: {props.age}
//       </div>
//   )
// }

class Parent extends React.Component{
  state={
    tag: ''
  }

  getChildMsg= (data) => {
    console.log("接收到子组件数据：",data)
  }

  handleChange = (data) => {
    this.setState({
      tag: this.state.tag + " " + data
    })
  }

  render() {
    return (
        <Provider value={"pink"}>
          <div>
            父组件：
            <Child lastName={this.state.tag} tap={this.getChildMsg}/>
            <ChildB changeAction={this.handleChange}/>
          </div>
        </Provider>

    );
  }
}

function Child(props) {
  function handleClick() {
    props.tap("刷抖音")
  }

  return (
      <div>
        子组件：{props.lastName}
        <button onClick={handleClick}>点击我，传递消息到父组件</button>
      </div>
  )
}

function ChildB(props) {
  return (
      <div>
        <button onClick={()=>{props.changeAction("B")}}>传递子组件B的B到A组件中去</button>
        <ChildBB/>
      </div>
  )
}

function ChildBB(props) {
  return (
      <div>
        这是B组件的子组件，BB组件
        <Consumer>
          {data => <div>通过context跨层传递的值为:  {data}</div>}
        </Consumer>
      </div>
  )
}

export default PropsTest;





