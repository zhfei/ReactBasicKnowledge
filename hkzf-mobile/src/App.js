import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 导入组件
import Home from '@/pages/Home'
import CityList from '@/pages/CityList'

function App() {
  return (
    <Router>
      <div className="App">
          <Link to='/home'>首页</Link>
          <Link to='/citylist'>城市列表</Link>

          <Route path='/home' component={Home}/>
          <Route path='/citylist' component={CityList}/>
      </div>
    </Router>
  );
}

export default App;
