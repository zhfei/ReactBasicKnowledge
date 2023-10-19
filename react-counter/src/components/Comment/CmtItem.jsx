
import React from "react";

export default
class CmtItem extends React.Component {
    render(){
        return <div style={{border:"1px solid #ccc", margin:"0 0 10px"}}>
            <h2>评论人：{this.props.user}</h2>
            <p>评论内容：{this.props.content}</p>
        </div>
    }
}
