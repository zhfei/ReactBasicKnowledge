
import React from "react";
import PropTypes from "prop-types"

const {Provider, Consumer} = React.createContext()

class PropsAgainTest extends React.Component {
  render() {
    return (
        <Provider value={"blue"}>
          <div>
            根组件
            <ChildA/>
          </div>
        </Provider>
    );
  }
}

function ChildA() {
  return (
      <div>
        子组件A
        <ChildAA colors={20}>
          <button>ChildAA标签的子组件</button>
        </ChildAA>
      </div>
  )
}

const ChildAA = (props) => {
  console.log(props.children)
  return (
      <div>
        {props.children}
        子组件AA
        <Consumer>
          {data => <div>根节点跨层传递数据{data}</div>}
        </Consumer>
      </div>
  )
}

ChildAA.propTypes = {
  colors: PropTypes.array,
  fn: PropTypes.func,
  age: PropTypes.number.isRequired,
  ele: PropTypes.element,
  person: PropTypes.shape({
    title: PropTypes.string,
    age: PropTypes.number
  })
}

ChildAA.defaultProps = {
  age: 10,
  colors: ['red', 'blue', 'green']
}

export default PropsAgainTest;







