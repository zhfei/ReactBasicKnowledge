
import React from "react";
import CmtItem from "./CmtItem.jsx";
import CmtBox from "./CmtBox.jsx";

export default
class CmtList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                {user:'zhangsan', content: 'hehehe'},
                {user:'zhangsan2', content: '这这一个'},
                {user:'zhangsan3', content: '这这一个库拉师傅'},
            ]
        }
    }

    render(){
        return <div>
            <h2>评论列表案例</h2>
            <CmtBox updateUI={this.updateUI}></CmtBox>
            <hr></hr>
            {
                this.state.list.map((item, index) => {
                    return <CmtItem {...item} key={index}></CmtItem>
                })
            }
        </div>
    }

    updateUI = () => {
        let cmtList = JSON.parse(localStorage.getItem('CmtList') || '[]')
        this.setState({
            list: cmtList
        })
    }


    componentWillMount(){
        this.updateUI()
    }
}










