import React from "react";

export default
class CmtBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render(){
        return <div>
            <label>评论人：</label> <br/>
            <input type="text" ref="user"></input>
            <label>评论内容：</label> <br/>
            <textarea cols='30' rows='4' ref='content'></textarea> <br/>

            <input type="button" value='发表评论' onClick={this.postCmt}></input>

        </div>
    }

    postCmt = ()=> {
        //1.收集新评论的数据
        //2.从本地数据库中取出历史评论
        //3.将新数据unshift历史数据中
        //4.数据保存到本地并刷新UI

        let cmtData = {user:this.refs.user.value, content:this.refs.content.value}

        let cmtList = JSON.parse(localStorage.getItem('CmtList') || '[]')
        
        cmtList.unshift(cmtData)
        
        localStorage.setItem('CmtList', JSON.stringify(cmtList))
        this.props.updateUI()

        console.log(cmtData)
        this.refs.user.value = this.refs.content.value = null

    } 
}
