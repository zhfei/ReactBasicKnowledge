
import React from "react";
import ReactTypes from "prop-types";



export default
class Context extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            color: 'red'
        }
    }

    //通过父组件的上下文进行全局传值
    //1.父组件定义一个getChildContext方法，名称固定，返回值为一个js对象，它是共享给子孙组件的数据
    getChildContext(){
        return {
            color: 'red'
        }
    }
    //2.定义一个固定类型的属性校验static childContextTypes，名称固定
    static childContextTypes = {
        color: ReactTypes.string
    }

    render(){
        return <div>
            <h2>Context</h2>
            <Com1 color={this.state.color}></Com1>
        </div>
    }
}



class Com1 extends React.Component {
    render(){
        return <div>
            <h2>Com1</h2>
            <Com2 color={this.props.color}></Com2>
        </div>
    }
}

class Com2 extends React.Component {


    //子组件使用上下文中的全局变量
    //1.子组件想要使用父组件通过context传递过来的数据，需要先校验父组件传递过来的参数类型
    static contextTypes = {
        color: ReactTypes.string
    }


    render(){
        return <div>
            <h3>Com2</h3>
            {/* 2.使用上下文context中共享的数据 */}
            <p style={{color:this.context.color}}>传递过来的值：{this.context.color}</p>
        </div>
    }
}
