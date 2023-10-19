import React from "react";
import ReactTypes from "prop-types";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        //构造器中不能使用this, 所以props不能从this.props读取。
        //使用props的值，初始化state的值
        this.state = {
            countNum: props.initCount
        }
    }

    // 在React中通过static defaultProps来设置默认Props的值
    static defaultProps = {
        initCount: 20
    }
    // 通过创建一个static propTypes对象，可以把外界传递过来的属性做类型校验
    // 最新的校验方式是要安装第三方包：prop-types, 大概在v.15.*之前，类型并没有从react包抽离，是存在于react包中的。
    // yarn add prop-types
    static propTypes = {
        initCount: ReactTypes.string
    }



    // 启动阶段
    // 1.组件将要被挂载前执行， 组件还没有挂载，虚拟DOM还没有创建, 无法通过API获取页面上的任何元素
    // 此时的state, props, 函数都已经初始化完毕。
    // 相当于Vue的 created阶段
    componentWillMount () {
        console.log("componentWillMount")
    }

    // 2.在内存中构建虚拟DOM
    // render() {
    //     return <div>

    //     </div>
    // }

    // 3.组件已经挂载到当前页面中了， 页面上已经可以看到这个DOM元素了
    // 相等于Vue中的mounted阶段
    componentDidMount() {
        console.log("componentWillMount")

        //func函数中，this只需它自己，如果是event触发的就指向event事件源。
        // document.getElementById('btn').onclick = function(){
        //     console.log(this)
        // }
        //箭头函数没有this, 所以它里面的this指向它的父级外层
        document.getElementById('btn').onclick = () => {
            console.log(this)
            this.setState({
                countNum: this.state.countNum
            })
        }
    }


    render(){
        return <div>
            <input type="button" value='加一' id="btn"></input>
            <br/>
            <h2>当前计数：{this.state.countNum}</h2>
        </div>
    }
}

