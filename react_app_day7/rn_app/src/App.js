import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home_tmp from './components/Home_tmp'
import Home from './components/Home'
import HomeNetWork from './components/Home_network'
import HomeCrossDomain from './components/Home_crossDomain'


import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import Phone from './components/phone'
import User from './components/User'
import UserA from './components/user/UserA'

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
          {/*Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
          {/*className="App-link"*/}
          {/*href="https://reactjs.org"*/}
          {/*target="_blank"*/}
          {/*rel="noopener noreferrer"*/}
        {/*>*/}
          {/*Learn React*/}
        {/*</a>*/}
      {/*</header>*/}


      {/*功能性测试*/}
      {/*<Home_tmp/>*/}

      {/*<Home/>*/}

      {/*<HomeNetWork/>*/}

      {/*<HomeCrossDomain/>*/}



      {/*路由*/}
        你好-路由
        {/*<div>*/}
            {/*<Link to="/home">点我去home组件页</Link>*/}
            {/*<Link to="/phone">点我去phone组件页</Link>*/}
            {/*<Link to="/network">点我去network组件页</Link>*/}
        {/*</div>*/}

        <div>
            {/*标签自动添加类属性：active*/}
            <NavLink to="/home">点我去home组件页</NavLink>
            <NavLink to="/phone">点我去phone组件页</NavLink>
            <NavLink to="/network">点我去network组件页</NavLink>
            <NavLink to="/user">点我去user组件页</NavLink>
        </div>


        {/*路由配置*/}

        {/*Switch:使用此修饰，可以避免多个匹配项都展示出来，只展示一项*/}
        <Switch>

            {/*path路径匹配用的是模糊匹配，to="/home"会匹配两种"/"，"/home"类型。*/}
            {/*exact:表示使用绝对匹配*/}
            {/*<Route path="/" exact component={Home}/>*/}
            <Route path="/home" component={Home}/>
            <Route path="/phone" component={Phone}/>
            <Route path="/network" component={HomeNetWork} />
            <Route path="/network" component={HomeNetWork} />
            <Route path="/user" component={User}/>
            <Route path="/user/UserA" component={UserA}/>

            {/*Redirect:重定向*/}
            <Redirect path="/" to="/user/UserA" exact />
        </Switch>

    </div>
  );
}

export default App;
