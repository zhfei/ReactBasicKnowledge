import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home_tmp from './components/Home_tmp'
import Home from './components/Home'
import HomeNetWork from './components/Home_network'
import HomeCrossDomain from './components/Home_crossDomain'
import HomeHook from './components/Home_hook'

import {Route, Link, NavLink, Switch, Redirect, withRouter} from 'react-router-dom'
import Phone from './components/phone'
import User from './components/User'
import UserA from './components/user/UserA'

function App(props) {
    // console.log(props)

    //withRouter功能-history: 监听路由变化
    props.history.listen((link)=>{
        console.log(link)
        console.log("切换路径到："+link.pathname)
    })

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


        {/*无状态函数组件，通过hook实现状态管理*/}
        <HomeHook/>



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
            <NavLink to={{pathname:"/network",query:{name:"小明"}}}>点我去network组件页</NavLink>
            <NavLink to="/user/我是路由传递的参数id">点我去user组件页</NavLink>
        </div>


        <div>
            {/*使用Button做路由切换*/}

            {/*编程式导航*/}
            {/*props.history.push('/页面路径')*/}
            {/*链接式导航*/}
            {/*<NavLink to="/home">点我去home组件页</NavLink>*/}
            <button onClick={()=>{props.history.push("/home")}} >点击按钮，去home</button>
            <button onClick={()=>{props.history.push("/phone")}}>点击按钮，去phone</button>
            <button onClick={()=>{props.history.push("/network")}}>点击按钮，去network</button>
            <button onClick={()=>{props.history.push("/user")}}>点击按钮，去user</button>
        </div>





        {/*路由配置*/}

        {/*Switch:使用此修饰，可以避免多个匹配项都展示出来，只展示一项*/}
        <Switch>

            {/*path路径匹配用的是模糊匹配，to="/home"会匹配两种"/"，"/home"类型。*/}
            {/*exact:表示使用绝对匹配*/}
            {/*<Route path="/" exact component={Home}/>*/}
            <Route path="/home" component={Home}/>
            <Route path="/phone" component={Phone}/>
            {/*<Route path="/network" component={HomeNetWork} />*/}
            <Route path="/network" component={HomeNetWork} />
            <Route path="/user/:id" component={User}/>
            <Route path="/user/UserA" component={UserA}/>

            {/*Redirect:重定向*/}
            <Redirect path="/" to="/user/UserA" exact />
        </Switch>




    </div>
  );
}

//withRouter 高阶组件（HOC）入参是组件，返回值也是组件: 让不是有路由切换组件才具有的，路由切换组件三个属性（history, match, location）
export default withRouter(App);

