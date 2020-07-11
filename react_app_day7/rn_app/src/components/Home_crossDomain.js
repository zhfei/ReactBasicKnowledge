//跨域
import React, {Component, Fragment} from 'react'
import axios from 'axios'

export default class HomeCrossDomain extends Component {
    constructor(props){
        super(props)

        this.state = {
            axiosData:[]
        }
    }

    //钩子函数：组件渲染完成后调用下面的函数
    componentDidMount() {
        this.axiosfun()
    }

    axiosfun = ()=>{
        axios.get("/api/101210101.html").then((response)=>{
            console.log(response.data)

            // this.setState({
            //     axiosData:response.data
            // })
        })
    }


    render() {
        return (
            //在HTML的body中，包裹<div>出现在了页面中
            <div>
                <div>这是一个自定义跨域问题网络组件</div>

                {this.state.axiosData.map((value,index)=>{
                    return <p key={index}>{value.name}</p>
                })}
            </div>

        )
    }
}