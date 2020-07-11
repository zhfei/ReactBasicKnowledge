import React, {Component} from 'react'
import PropTypes from 'prop-types'

//pubsub-js：类似于消息总线，将事件抛到消息总线上，别的组件订阅消息总线，就能收到这个消息
import Pubsub from 'pubsub-js'


export default class SubComp extends Component {
    static propTypes = {
        text:PropTypes.string
    }

    constructor(props) {
        super(props)

        this.state={
            name:'jack',
            text:'这是子组件内的属性值',
            pubText:'这是子组件中，用于同级兄弟传值的属性值'
        }
    }

    changeName() {
        this.setState({name:'Tom'})
    }

    pubSubFun = () => {
        //将事件抛到消息总线上
        Pubsub.publish("evt_1", this.state.pubText)
    }

    render() {
        return (
            <div>
                SubComp -- Hello 子组件
                这是从父组件中传递过来的参数：{this.props.text}
                <p>这个组件的作者是:{this.state.name}</p>
                <button onClick={this.changeName.bind(this)}>点击改名字</button>

                <button onClick={this.props.fufun.bind(this, this.state.text)}>点击我，将子组件属性传递给父组件</button>

                <button onClick={this.pubSubFun}>点击我，将子组件的属性传递给同级兄弟组件</button>
            </div>
        )
    }
}