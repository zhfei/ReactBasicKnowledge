import React from "react";

export default
class Movie extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

        console.log(props)
    }

    render(){
        // 1.如果想从路由规则中提取匹配到的参数进行使用，可以使用this.props.match.params.*来访问
        return <div>
            Movie --- {this.props.match.params.type} --- {this.props.match.params.id}
        </div>
    }
}
