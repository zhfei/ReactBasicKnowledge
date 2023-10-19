
import React from "react";
import ReactTypes from "prop-types";
import Counter from "./Counter.jsx";

export default class SuperCounter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            num: props.num
        }
    }

    static defaultProps = {
        num: 0
    }

    static propTypes = {
        num: ReactTypes.number
    }

    render(){
        return <div>
            <input type='button' value="改变" onClick={this.changeNum}></input>
            <br/>
            <Counter initCount={this.state.num}></Counter>
        </div>
    }

    changeNum = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
}






