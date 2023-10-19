
import React from "react";

export default class BindThis extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            textMsg: '哈哈哈哈'
        }

        // bind不会修改原函数的this指向，它会新copy一个函数
        // 当函数被bind修改了this指向后，bind函数调用的结果会有一个返回值，这个值this被修改后的函数值
        this.changeMessage1 = this.changeMessage1.bind(this,'a','b')

    }

    render(){
        return <div>
            <h2>绑定This的几种方法</h2>
            <hr></hr>

            {/* this绑定方式1 */}
            {/* bind的作用：修改函数中的this指向，把它修改为bind函数的第一个参数, 然后后面的参数会当做函数的参数传递给函数 */}
            {/* call/apply修改完this后，会立即调用函数。bind修改后不调用 */}
            <input type="button" value="绑定this并传参的方式1" onClick={this.changeMessage1.bind(this,'hi','merray')}></input>

            {/* this绑定方式2 */}
            {/* 在constructor构造器中绑定this,并替换原函数 ： this.changeMessage1 = this.changeMessage1.bind(this,'a','b')*/}
            <input type="button" value="绑定this并传参的方式2" onClick={this.changeMessage1}></input>

            {/* this绑定方式3 */}
            {/* 使用箭头函数包裹，并在箭头函数中进行调用，因为箭头函数没有this, 所以在它里面使用this,会自动使用父作用域的this, 即：变成了组件实例对象 */}
            <input type="button" value="绑定this并传参的方式3" onClick={()=>{this.changeMessage1()}}></input>
            <input type="button" value="绑定this并传参的方式4" onClick={()=>{this.changeMessage2()}}></input>

            {/* 文本输入框的绑定 */}
            {/* React中没有像Vue那样的双向绑定v-model指令，无法支持双向绑定。React是单向数据流，只能从state->UI */}
            {/* React的解决方案是通过onChange监听，在监听方法中更新state， 然后state->UI更新。如果输入框input是只读的,则需要加上readOnly声明 */}
            <input type="text" ref="textRef" style={{width: '100%'}} value={this.state.textMsg}  onChange={this.changeTextMsg}></input>

        </div>
    }

    // This的三种指向：1.指向对象自身，2.指向函数自身，3.指向触发事件的事件源
    changeMessage1(p1,p2){
        console.log(this)
        console.log(p1+'------'+p2)
    }
    changeMessage2 = (p1,p2)=>{
        console.log(this)
        console.log(p1+'------'+p2)
    }

    changeTextMsg = (e) => {
        //方式1：document.getElementById
        //方式2：this.refs.textRef
        console.log(this.refs.textRef)
        console.log(e.target.value)
        this.setState({
            textMsg: e.target.value
        })
    }
}