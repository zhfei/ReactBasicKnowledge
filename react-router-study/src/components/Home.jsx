import React from "react";

export default
class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    render(){
        return <div>
            <p>Home</p>
        </div>
    }
}
