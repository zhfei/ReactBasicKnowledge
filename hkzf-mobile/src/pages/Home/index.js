import React, { Component } from 'react'
import {Route, Switch, useHistory, useLocation, MemoryRouter as Router} from 'react-router-dom'
import { NavBar, TabBar } from 'antd-mobile'
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'
import News from '../News'
import './index.css'

const Bottom = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '找房',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '咨询',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='app'>
          <div className='top'>
            <NavBar backArrow={false}>好客租房</NavBar>
          </div>
          <div className='body'>
            <Switch>
              <Route exact path='/home'>
                <Home1></Home1>
              </Route>
              <Route exact path='/todo'>
                <Todo />
              </Route>
              <Route exact path='/message'>
                <Message />
              </Route>
              <Route exact path='/me'>
                <PersonalCenter />
              </Route>
            </Switch>
          </div>
          <div className='bottom'>
            <Bottom />
          </div>
        </div>
        {/* 设置嵌套路由出口 */}
        <Route path='/home/news' component={News}/>  

      </div>
    )
  }
}

function Home1(props) {
  return (
    <div>
      首页
      {props.chrildren}
  </div>
  )
}

function Todo() {
  return <div>待办</div>
}

function Message() {
  return <div>消息</div>
}

function PersonalCenter() {
  return <div>我的</div>
}


