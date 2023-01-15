
import React from "react";
import PropTypes from "prop-types"

class ReUseComponent extends React.Component{
  render() {
    return (
        <div>
          父组件
          <Mouse>
            {(mouse) => {
              return <p>当前坐标为：{mouse.x}, {mouse.y}</p>
            }}
          </Mouse>

          <Mouse>
            {(mouse) => {
              return (
                  <img src={'./img/cat.jpeg'}
                       style={{position: "absolute", top:mouse.y,left:mouse.x}}/>
              )
            }}
          </Mouse>

          <MouseP/>
        </div>
    );
  }
}

class Mouse extends React.Component{
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    window.addEventListener("mousedown", this.handleMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleMouseMove)
  }

  render() {
    return this.props.children(this.state);
  }
}

Mouse.propTypes = {
  children: PropTypes.func.isRequired
}


function withMouse(WrappedComponent) {
  class Mouse extends React.Component{
    state = {
      x: 0,
      y: 0
    }

    componentDidMount() {
      window.addEventListener("mousemove", this.handleMouseMove)
    }

    componentWillUnmount() {
      window.removeEventListener("mousemove", this.handleMouseMove)
    }

    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    render() {
      return (
          <WrappedComponent {...this.state} {...this.props}/>
      );
    }
  }
  return Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
}

class PurePosition extends React.Component{
  render() {
    return (
        <div>
          高阶组件坐标位置：{this.props.x}, {this.props.y}
        </div>
    );
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component"
}

const MouseP = withMouse(PurePosition)

export default ReUseComponent

