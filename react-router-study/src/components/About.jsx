import React from "react";

export default
class About extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    render(){
        return <div>
            <p>About</p>
        </div>
    }
}
