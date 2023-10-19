import React from "react";
import ReactTypes from "prop-types";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            countNum: 0
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



    render(){
        return <div>
            <h2>当前计数：{this.props.initCount}</h2>
        </div>
    }
}

