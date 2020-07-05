import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class SubComp extends Component {
    static propTypes = {
        text:PropTypes.string
    }

    constructor(props) {
        super(props)

        this.state={
            name:'jack'
        }
    }

    changeName() {
        this.setState({name:'Tom'})
    }

    render() {
        return (
            <div>
                SubComp -- Hello 子组件
                这是从父组件中传递过来的参数：{this.props.text}
                <p>这个组件的作者是:{this.state.name}</p>
                <button onClick={this.changeName.bind(this)}>点击改名字</button>
            </div>
        )
    }
}