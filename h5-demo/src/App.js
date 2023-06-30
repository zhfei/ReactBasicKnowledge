import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';
import OriginalWebViewApp from './H5/OriginalWebViewApp';
import WebViewJavaScriptBridgeApp from './H5/WebViewJavaScriptBridgeApp';
 
 
function App() {
  
  return (
     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
 
        <Router>
          <Link to="/" className="App-link">App使用原始JS注册方式与h5交互</Link>
          <Link to="/webViewJavaScriptBridge" className="App-link">App使用WebViewJavaScriptBridge注册方式与h5交互</Link>
           
          <div style={{height:60}}></div>
 
          <Switch>
            <Route exact path="/"><OriginalWebViewApp/></Route>
            <Route path="/webViewJavaScriptBridge"><WebViewJavaScriptBridgeApp/></Route>
          </Switch>
        </Router>
      </header>
         
    </div>
     
  );
}
 
export default App;