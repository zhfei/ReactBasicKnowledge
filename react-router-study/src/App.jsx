
import React from "react";

// HashRouter表示路由的根容器，所有的路由相关的东西都包裹在HashRouter里面, 一个网站中只需要一个HashRouter
// Route表示一个路由规则+占位标识[匹配到的组件就在这个位置展示]，在Route上有2个重要的属性，path, component
// Link表示一个路由链接， 类似与Vue中的<router-link></router-link>
import {HashRouter, Route, Link} from 'react-router-dom'

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Movie from "./components/Movie.jsx";

export default
class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    render(){
        //1.当使用了HashRouter把根组件APP包裹起来后，网站就启用路由了
        return <HashRouter>
            <div>
            <h2>这是根组件</h2>
            {/* 2.Link表示一个跳转链接 */}
            <hr></hr>
            <Link to='/home'>首页</Link>&nbsp;&nbsp;
            <Link to='/movie/top250/10'>电影</Link>&nbsp;&nbsp;
            <Link to='/about'>关于</Link>

            {/* 3.Route表示一个路由规则+占位标识 */}
            <br/>
            {/* Route表示一个路由规则+占位标识[匹配到的组件就在这个位置展示], 默认Route的匹配规则是模糊匹配的，如果想要精确匹配，需要添加exact属性声明 */}
            <Route path='/home' component={Home}></Route>
            <hr></hr>
            <Route path='/about' component={About}></Route>
            <hr></hr>
            {/* 如果要匹配参数，可以在匹配规则中使用:修饰符，表示这个位置匹配到的是参数 */}
            <Route path='/movie/:type/:id' component={Movie} exact></Route>

        </div>
        </HashRouter>
    }
}


