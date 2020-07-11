import React, {Component} from 'react'

import SubComp from './SubComp'

export default class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            text:"这是在父组件中，可以通过子组件传值的属性默认值"
        }
    }

    dataFun = (text) => {
        this.setState({
            text:text
        })
    }

    render(){
        return (
            <div>
                Home -- hello
                <p>Home2 子组件传值给父组件 -- {this.state.text}</p>
                <SubComp text="我是参数123" fufun={this.dataFun}/>
            </div>
        )
    }
}