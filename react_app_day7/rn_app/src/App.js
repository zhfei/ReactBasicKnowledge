import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home_tmp from './components/Home_tmp'
import Home from './components/Home'
import HomeNetWork from './components/Home_network'
import HomeCrossDomain from './components/Home_crossDomain'

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


      <Home_tmp/>

      <Home/>

      <HomeNetWork/>

      <HomeCrossDomain/>

    </div>
  );
}

export default App;
