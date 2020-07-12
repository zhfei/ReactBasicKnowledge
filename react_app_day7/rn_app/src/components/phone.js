import React, {Component} from 'react'

//pubsub-js：类似于消息总线，将事件抛到消息总线上，别的组件订阅消息总线，就能收到这个消息
import Pubsub from 'pubsub-js'

//同级兄弟组件之间传值，需要先安装工具pubsub-js

export default class Phone extends Component {

    constructor(props){
        super(props)

        this.state = {
            data:'这是同级组件传递默认的值'
        }

        //通过监听事件总线，从总线中监听事件：evt_1
        Pubsub.subscribe('evt_1', (msg, data) => {
            console.log(msg+' : '+data)

            this.updateState(data)
        })

    }


    componentDidMount() {
        console.log("接收到query方式发送的参数：" + this.props.location)
        console.log(this.props)
    }


    updateState = (text)=>{
        this.setState({
            data:text
        })
    }

    render() {
        return (
            <div>
                <p>我是兄弟同级子组件phone</p>
                <p>这是通过pubsub事件总线监听到的 同级兄弟组件发送过来的消息，传递的内容是：{this.state.data}</p>
            </div>
        )
    }
}