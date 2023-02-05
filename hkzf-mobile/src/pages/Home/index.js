import React, { Component } from 'react'
import {Route, Switch, useHistory, useLocation, MemoryRouter as Router} from 'react-router-dom'
import { NavBar, TabBar } from 'antd-mobile'
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'
import News from '../News'
import HouseList from '../HouseList'
import Profile from '../Profile'
import Index from '../Index'


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
      key: '/home/houselist',
      title: '找房',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/home/news',
      title: '咨询',
      icon: <MessageOutline />,
    },
    {
      key: '/home/profile',
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
                <Index/>
              </Route>
              <Route path='/home/houselist'>
                <HouseList />
              </Route>
              <Route path='/home/news'>
                <News />
              </Route>
              <Route path='/home/profile'>
                <Profile />
              </Route>
            </Switch>
          </div>
          <div className='bottom'>
            <Bottom />
          </div>
        </div>
      </div>
    )
  }
}


