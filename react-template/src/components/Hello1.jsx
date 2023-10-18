import React from "react"

// 2.通过继承React.Component类，就得到一个类组件模板
// 类组件的参数 内部会将参数自动包装到props的内部
export default class Hello1 extends React.Component {
    constructor(props) {
        super(props)
        //在constructor中是不能直接通过this.props获取参数的，如果想获取参数，需要显示的在constructor中添加参数
        console.log(this.props)
        console.log('---------')
        console.log(props)


        //props外部传参，不能进行修改
        //state:私有状态变量，调用setState修改可以更新UI
        this.state = {
            msg: 'des',
            state: 10
        }
    }

    render() {
        return <div>
            这是一个React.Component的组件:{this.props.name} - {this.props.age}
        </div>
    }
}