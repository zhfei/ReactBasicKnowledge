
import React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/Counter/Counter.jsx"




ReactDOM.render(<div>
    <Counter></Counter>
    <hr></hr>
    <Counter initCount={33}></Counter>
    <Counter initCount="sssss"></Counter>
</div>, document.getElementById("root"))


