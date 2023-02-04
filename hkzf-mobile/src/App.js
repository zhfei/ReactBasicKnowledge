import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 导入组件
import Home from '@/pages/Home'
import CityList from '@/pages/CityList'

function App() {
  return (
    <Router initialEntries={['/home']}>
      {/* <div className="App">
          <Link to='/home/news'>新闻列表</Link>
          <Link to='/citylist'>城市列表</Link>

          <Route path='/citylist' component={CityList}/> 
      </div> */}
      <Home>
      </Home>
    </Router>
  );
}

export default App;
