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
        // document.getElementById('btn').onclick = () => {
        //     console.log(this)
        //     this.setState({
        //         countNum: this.state.countNum
        //     })
        // }
    }


    //更新阶段
    //父组件内部状态更改进行UI刷新时，导致传递给子组件的props值发生了更新,则会触发这个方法
    //组件首次渲染时，不会触发这个方法
    componentWillReceiveProps(nextProps){
        //componentWillReceiveProps中，通过this.props.num获取的是历史旧值，nextProps拿到的是新值
        console.log(this.props.initCount + '---componentWillReceiveProps----' + nextProps.initCount)
    }

    //判断组件是否需要更新, 必须返回一个bool值， true时刷新UI，false是不刷新UI。
    shouldComponentUpdate(nextProps, nextState, nextContext){
        //在shouldComponentUpdate中，通过this.state.count拿到的是上一次的历史数据，最新的数据要从nextState中拿
        console.log(this.state.countNum + '-------' + nextState.countNum)
        return nextState.countNum % 2 == 0 ? true : false
    }
    //组件将要更新，此时虚拟DOM和页面上的组件都是旧的
    componentWillUpdate() {
        // console.log(document.getElementById('h2'))
        //通过React提供的ref机制获取DOM元素
        console.log(this.refs.h2Ref)
    }
    //组件更新完成，虚拟DOM已经渲染到真实的页面之上了，state, DOM, 页面元素保持一致
    componentDidUpdate(){
        console.log(this.refs.h2Ref)
    }



    increaseNum = ()=>{
        this.setState({
            countNum: this.state.countNum + 1
        })
    }


    render(){
        return <div>
            <input type="button" value='加一' id="btn" onClick={this.increaseNum}></input>
            <br/>
            <h2 id="h2" ref='h2Ref'>当前计数：{this.state.countNum}</h2>
        </div>
    }
}

