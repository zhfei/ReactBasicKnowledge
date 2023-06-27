import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[name, setName] = useState('')
 
  // 0.公共
  //原生发消息给JS，JS的回调
  window.qrResult = (res)=>{
    setName(res)
    return '-------: '+res
  }
  // scheme拦截
  const localPostion = () => {
    window.location.href = 'position://localPosition?name=jack&age=20'
  }
 
  // 1.WKWebView的交互
  //js发消息给原生
  const qrAction = () => {
    window.webkit.messageHandlers.QRCodeScan.postMessage({"name":"value"})
  }
 
  // 2.UIWebView的交互
  //js发消息给原生
  const qrActionOnAppModel = () => {
    const res = window.appModel.QRCodeScan({"name":"value"})
    alert(res.name)
  }
  const showAlert = () => {
    window.showAlert()
  }
 
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 
        <div>------------------公共------------------</div>
        <a href='position://abc?name=jack' style={{color:'white'}}>scheme拦截1：定位</a>
        <button onClick={localPostion}>scheme拦截2</button>
        <div>
         原生执行代码的结果：{name}
        </div>
 
        <div>------------------WKWebView------------------</div>
        <button onClick={qrAction}>点击扫描</button>
         
 
        <div>------------------UIWebView------------------</div>
        <button onClick={qrActionOnAppModel}>点击扫码</button>
        <button onClick={showAlert}>弹窗</button>
 
      </header>
    </div>
  );
}

export default App;
