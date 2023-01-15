
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

  render() {
    return (
        <div>
          <input type={"text"} value={this.state.txt} onChange={this.handleTextChange}/>
          <textarea value={this.state.content} onChange={this.handleContent}></textarea>
          <select value={this.state.selectV} onChange={this.handleSelectV}>
            <option value="sh">上海</option>
            <option value="bj">北京</option>
            <option value="gz">广州</option>
          </select>
          <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChecked}/>
          <input type={"text"} ref={this.txtRef}/>
          <button onClick={this.handleClick}>获取非受控组件上的值</button>
        </div>
    );
  }
}

export default Form;

