import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 导入组件
import Home from '@/pages/Home'
import CityList from '@/pages/CityList'

function App() {
  return (
    <Router initialEntries={['/home']}>
      <Route path='/home' component={Home}/> 
    </Router>
  );
}

export default App;
