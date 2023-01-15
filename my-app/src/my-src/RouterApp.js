
import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"


// import {HashRouter as Router, Route, Link, Routes} from "react-router-dom"


const First = () => <p>这是First组件页面</p>
const Home = () => <h2>这是home主页</h2>

class RouterApp extends React.Component{
  render() {
    return (
        <Router>
          <div>
            <Routes>
              <Route path="/first" element={<First/>}/>
              <Route path={"/first/home"} element={<Home/>}/>
              <Route exact path={"/"} element={<Login/>}/>
              <Route path={"/manager"} element={<Manager/>}/>
            </Routes>


            路由主页
            <br/>
            <Link to="/first">页面一</Link>
            <br/>
            <Link to={"/first/home"}>Home主页</Link>
            <br/>
            <Link to={"/"}>进入登录页面</Link>
          </div>
        </Router>
    );
  }
}

class Login extends React.Component{
  handleClick = () => {
    // let history = useHistory()
    this.props.history.push("/manager")
  }

  render() {
    return (
        <div>
          登录页面
          <button onClick={this.handleClick}>点击登录</button>
        </div>
    );
  }
}

const Manager = (props) => {
  // let history = useHistory()

  const handleClick = () => {
    props.history.go(-1)
  }

  return (
      <div>
        管理后台
        <button onClick={handleClick}>返回到登录页面</button>
      </div>
  )
}

export default RouterApp





