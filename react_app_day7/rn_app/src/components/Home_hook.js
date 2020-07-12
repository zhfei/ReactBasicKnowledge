//hook: 让无状态组件可以使用状态，在react中状态管理是必不可少的，在react开发中状态管理是必不可少的，以前类管理使用的是类组件和redux等来管理

import React, {Component, Fragment, useState} from 'react'


// 1.类组件
// export default class HomeHook extends Component {
//
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             text: "我是可以进行状态管理的 状态数据"
//         }
//     }
//
//     render() {
//         return (
//             //在HTML的body中，包裹<div>出现在了页面中
//             <div>
//                 <div>这是一个自定义状态管理组件：{this.state.text}</div>
//
//             </div>
//
//         )
//     }
// }



// 2.函数组件 是无状态组件
// 使用react中提供的hook 可以实现状态管理.
export default function HomeHook(props) {

    // useState 是来定义一个状态的，和类组件的状态不同，函数组件的状态可以是对象或者基础类型数据。
    // useState 返回的是一个数组，第一个是状态值，第二个是改变状态的函数
    // 0:状态的初始化值
    let [val, setVal] = useState(0)

    //当状态比较多时，可以使用对象定义
    let [vall, setVall] = useState({
        vala:0,
        valb:1,
        valc:2,
    })
    // 或者使用第一种创建方式，不断创建

    return (
        <div>
            hello -- 这是无状态 - 函数组件

            状态数据：{val}
            <button onClick={setVal(val+1)}>但我更新状态</button>

            多状态数据：vala-{val.vala},  valb-{val.valb},valc-{val.valc},
            <button onClick={setVall(val.vala+1)}>但我更新状态</button>
        </div>
    )
}
