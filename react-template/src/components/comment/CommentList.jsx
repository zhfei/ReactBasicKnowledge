
import React from "react"
import CommentItem from "./CommentItem.jsx"

export default class CommentList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list : [
                {user:'zhang san', content: '呵呵呵'},
                {user:'zhang san2', content: '呵呵,55'},
                {user:'zhang san3', content: '呵呵呵kk'},
                {user:'zhang san4', content: '呵呵呵dfgfd'},
                {user:'zhang san5', content: '呵呵呵fff'},
                {user:'zhang san6', content: '呵呵呵dddd'},
                {user:'zhang san7', content: '呵呵呵3333'},
            ]
        }
    }

    render(){
        return <div>
            {
                this.state.list.map((item,index) => {
                    //使用对象扩展，批量传递参数
                    return <CommentItem {...item} key={index}></CommentItem>
                })
            }
        </div>
    }
}



