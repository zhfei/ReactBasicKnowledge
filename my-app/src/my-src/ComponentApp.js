
import React from "react";

class ComponentApp extends React.Component{
  state = {
    title:"",
    content:"",
    comments: []
  }

  //受控组件，修改事件绑定到state属性上
  handleText = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  // 提交按钮事件处理
  // 对于this为undefined问题，要么1.在类中自己添加箭头函数变量，2.在render的{}添加this.xxx()调用普通函数，
  // 3.在render的{}中写箭头函数，在箭头函数中调用this.xxx()普通函数
  handleClick = () => {
    //对象解包
    let {title, content} = this.state
    //边界条件过滤
    if (title.trim() === '' || content.trim() === '') {
      alert("请填写标题和内容！！")
      return
    }

    let obj = {
      id: this.state.comments.length + 1,
      title:title,
      content: content
    }
    // 添加数据源
    // this.state.comments.unshift(obj)
    // [obj, ...this.state.comments]

    this.setState({
      title: "",
      content: "",
      comments: [obj, ...this.state.comments]
    })
  }

  showCommitList() {
    if (this.state.comments.length > 0) {
        return this.state.comments.map((item) => {
          return (
            <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            </li>
         )
        })
    } else {
      return <div>暂无评论。。。</div>
    }
  }

  render() {
    console.log(this.state.comments)

    return (
        <div>
          <div><input onChange={this.handleText} value={this.state.title} name="title"/></div>
          <div><textarea onChange={this.handleText} value={this.state.content} name="content"/></div>
          <div><button onClick={this.handleClick}>发表评论</button></div>
          <ul>
            {this.showCommitList()}
          </ul>
        </div>
    );
  }
}

export default ComponentApp;
