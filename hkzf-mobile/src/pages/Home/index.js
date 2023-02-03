import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import News from '../News'

export default class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'red', padding: 10}}>
        Home
        {/* 设置嵌套路由出口 */}
        <Route path='/home/news' component={News}/>

      </div>
    )
  }
}
