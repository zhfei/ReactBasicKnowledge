import React, {Component} from 'react'

import UserA from './user/UserA'
import UserB from './user/UserB'

import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'

export default class User extends Component {
    componentDidMount() {
        // params接收组件路由传递过来的参数
        console.log("收到通过路由方式传递过来的参数，参数为："+this.props.match.params.id)
    }

    render(){
        return (
            <div>
                User路由
                <NavLink to="/user/UserA">UserA</NavLink>
                <NavLink to="/user/UserB">UserB</NavLink>

                <Route path="/user/UserA" component={UserA}/>
                <Route path="/user/UserB" component={UserB}/>
            </div>
        )
    }
}