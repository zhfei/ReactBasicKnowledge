
import React from "react";

class State extends React.Component{
  //state初始化方式一
  constructor() {
    super();
    this.state = {
      count:0
    }
    // this.incrementCount = this.incrementCount.bind(this)
  }
  //state初始化方式一
  // state={
  //   count:0
  // }

  incrementCount = () => {
    //this为undefined
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    return (
        <div>
          计数值：{this.state.count}
          <button onClick={this.incrementCount}>+1</button>
          {/*<button onClick={()=>this.incrementCount()}>+1</button>*/}

        </div>
    );
  }
}

export default State
