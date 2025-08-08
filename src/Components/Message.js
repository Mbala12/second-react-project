import React, {Component} from 'react'

export class Message extends Component {
    constructor(){
        super()

        this.state = { 
            message:'Welcome Visitor',
            btnName:'Subscribe'
        }
    }

    changeMessage = () =>{
        this.setState({
            message:'Thank you for subscribing',
            btnName:'Thank you'
        })
    }


    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>{this.state.btnName}</button>
            </div>
        )
    }
}
//export default Message