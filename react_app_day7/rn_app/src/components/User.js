import React, {Component} from 'react'

import UserA from './user/UserA'
import UserB from './user/UserB'

import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'

export default class User extends Component {

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