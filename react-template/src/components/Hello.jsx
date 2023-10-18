import React from "react";



//1.构造函数组件 的参数需要在参数中进行显示声明
export default function Hello(props) {
    return <div>
        Hello 构造函数 组件:{props.name} - {props.age}
    </div>
}








