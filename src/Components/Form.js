import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:'',
         role: 'user',
      }
    }
    
    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    } 
    
    handlePasswordChange = (event) =>{
        this.setState({
            password: event.target.value
        })
    }

    handleRoleChange = event =>{
        this.setState({
            role: event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.password} ${this.state.role}`)
        event.preventDefault()
    }

  render() {
    return (
      <form > {/* onSubmit={this.handleSubmit} */}
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>Password</label>
            <input type='text' value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        <div>
            <label>Roles</label>
            <select value={this.state.role} onChange={this.handleRoleChange}>
                <option value="admin">admin</option>
                <option value="manager">manager</option>
                <option value="user">user</option>
            </select>
        </div>
        <div>
            <button type='submit' onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form