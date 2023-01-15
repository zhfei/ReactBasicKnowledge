
import React from "react";

class Form extends React.Component{
  constructor() {
    super();
    this.txtRef = React.createRef()
  }

  state={
    txt: "",
    content:"",
    selectV:"sh",
    isChecked:true
  }

  handleTextChange = (e) => {
    this.setState({
      txt: e.target.value
    })
  }

  handleContent = e => {
    this.setState({
      content: e.target.value
    })
  }

  handleSelectV = e => {
    this.setState({
      selectV: e.target.value
    })
  }

  handleChecked = e => {
    this.setState({
      isChecked: e.target.isChecked
    })
  }

  handleClick = () => {
    console.log(this.txtRef.current.value)
  }

  handleChange = (e) => {
    // 获取标签的值
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    // 获取标签的name属性
    const name = e.target.name

    // 更新动态属性的状态
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
        <div>
          {/* 文本框 */}
          <input type={"text"} value={this.state.txt} onChange={this.handleTextChange}/>
          {/* 富文本框 */}
          <textarea value={this.state.content} onChange={this.handleContent}></textarea>
          {/* 下拉框 */}
          <select value={this.state.selectV} onChange={this.handleSelectV}>
            <option value="sh">上海</option>
            <option value="bj">北京</option>
            <option value="gz">广州</option>
          </select>
          {/* 复选框 */}
          <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChecked}/>
          <input type={"text"} ref={this.txtRef}/>
          <button onClick={this.handleClick}>获取非受控组件上的值</button>
          <hr/>

          {/* 使用动态name属性更新 */}
          <input name="txt" type={"text"} value={this.state.txt} onChange={this.handleChange}/>
          <textarea name="content" value={this.state.content} onChange={this.handleChange}></textarea>
          <select name="selectV" value={this.state.selectV} onChange={this.handleChange}>
            <option value="sh">上海</option>
            <option value="bj">北京</option>
            <option value="gz">广州</option>
          </select>
          <input name="checkName" type="checkbox" checked={this.state.checkName} onChange={this.handleChange}/>
        </div>
    );
  }
}

export default Form;

