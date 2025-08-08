import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    //4th Approach
    return this.state.isLoggedIn && <div>Hello there</div>
    
    /* 
    //3rd Approach
    return(
        this.state.isLoggedIn?(<div>Hello there</div>):(<div>Welcome there</div>)
    ) */

   /*  
    //2nd Approach
    let message
    if(this.state.isLoggedIn){
        message = <div>Hello there</div>
    }else{
        message = <div>Welcome there</div>
    }
    return <div>{message}</div> */

    /* 
    //1st Approach    
    if(this.state.isLoggedIn){
        return <div>Hello there</div>
    }else{
        return <div>Welcome there</div>
    } */

  /*   return (
        <div>
            <div>Welcome there</div>
            <div>Hello there</div>
        </div>
      
    ) */
  }
}

//export default UserGreeting