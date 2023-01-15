
import React from "react";

class LifeCircle extends React.Component{
  constructor(props) {
    super(props);
    console.warn("生命周期-挂载阶段-1：constructor")
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    //componentDidMount执行时，DOM页面已经渲染完成，可以进行dom操作了
    //是操作DOM，发送网络请求的地方
    const title = document.getElementById("title")
    console.warn("生命周期-挂载阶段-3：componentDidMount", title)
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })

    // this.forceUpdate()
  }

  render() {
    //每次渲染都会调用（包括：挂载阶段，更新阶段）
    //render中不可用调用setState，会循环调用, setState流程做了2件事，一是更新状态数据，二是更新UI调用render方法
    console.warn("生命周期-挂载阶段-2：render")
    return (
        <div>
          生命周期组件
          {
            this.state.count > 3
                ?<div>豆豆被打死了~</div>
                :<Counter count={this.state.count}/>
          }

          <h2 id={"title"}>标题</h2>
          <button onClick={this.handleClick}>打豆豆</button>
        </div>
    );
  }
}

class Counter extends React.Component{
  componentDidMount() {
    this.timerId = setInterval(()=>{
      console.log("定时器打印了...")
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("更新阶段：componentDidUpdate-2",prevProps,this.props)
    if (prevProps.count !== this.props.count) {
      this.setState({})
    }
  }

  componentWillUnmount() {
    console.log("组件要被卸载了：componentWillUnmount")
    clearInterval(this.timerId)
  }

  render() {
    console.log("更新阶段：render-1")
    return (
        <div>
          豆豆被打了: {this.props.count} 次
        </div>
    );
  }
}


export default LifeCircle





