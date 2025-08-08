import React, { Component } from 'react'
import RegCompo from './RegCompo'
import PureCompo from './PureCompo'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Apoulah'
      }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: 'Apoulah'
            })
        }, 2000)
    }
  render() {
    console.log('*********** Parent Component render **************')
    return (
      <div>
        Parent Component
        <RegCompo name={this.state.name} />
        <PureCompo name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp