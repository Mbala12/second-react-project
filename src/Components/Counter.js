import React, {Component} from 'react'

export class Counter extends Component{
   constructor(props){
    super(props)
    
    this.state = {
        count: 0
    }
   }

   canIncrement(){
      /*   this.setState({
            count: this.state.count += 1
        },
        ()=>{
            console.log("CallBack Value: ", this.state.count)
        }) */
       this.setState((prevState, props) => ({ 
            count: prevState.count + 1//props.addValue
       }))
        console.log(this.state.count)
   }

   setIncrement(){
    this.canIncrement()
    this.canIncrement()
    this.canIncrement()
   }

    render(){
        return (
            <div>
                <h1>Counting - {this.state.count}</h1>
                <button onClick={() => this.setIncrement()}>Increment</button>
            </div>
        )
    }
}