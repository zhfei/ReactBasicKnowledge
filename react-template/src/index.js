
import React from "react";
import ReactDOM from "react-dom";


class CommentList extends React.Component {
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
                    return <div key={index}>
                        <h3>姓名：{item.user}</h3>
                        <p>内容：{item.content}</p>
                    </div>
                })
            }
        </div>
    }
}


ReactDOM.render(<div>
    <CommentList></CommentList>
</div>, document.getElementById("root"))


