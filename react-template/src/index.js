
import React from "react";
import ReactDOM from "react-dom";



var h1Dom = React.createElement("h2", {title:"hello, jsx的h1"}, '这是jsx的子元素')


ReactDOM.render(h1Dom, document.getElementById("root"))


