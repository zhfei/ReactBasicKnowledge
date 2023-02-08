import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// 导入组件
import Home from '@/pages/Home'
import CityList from '@/pages/CityList'

function App() {
  return (
    <Router initialEntries={['/home']}>
      {/* 添加重定向 */}
      <Route path='/' exact render={()=><Redirect to='/home'/>}></Route>
      <Route path='/home' component={Home}/> 
      <Route path='/citylist' component={CityList} ></Route>
    </Router>
  );
}

export default App;
