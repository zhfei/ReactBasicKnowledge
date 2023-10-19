
import React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/Counter/Counter.jsx"
import SuperCounter from './components/Counter/SuperCounter.jsx'
import BindThis from './components/BindThis.jsx'
import CmtList from "./components/Comment/CmtList.jsx";



// ReactDOM.render(<div>
//     <Counter></Counter>
//     <hr></hr>
//     <Counter initCount={33}></Counter>
//     <Counter initCount="sssss"></Counter>
//     <hr></hr>
//     <SuperCounter></SuperCounter>
//     <BindThis></BindThis>
// </div>, document.getElementById("root"))

ReactDOM.render(<div>
    
    <CmtList></CmtList>
</div>, document.getElementById("root"))


