import React, {Component} from 'react'

import SubComp from './SubComp'

export default class Home extends Component {

    render(){
        return (
            <div>
                Home -- hello
                <SubComp text="我是参数123"/>
            </div>
        )
    }
}