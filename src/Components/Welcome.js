import React, {Component} from 'react'

class Welcome extends Component {
    render(){
        const {name, age} = this.props
        return <h1>Welcome {name} and Your age is {age}</h1>
    }
}
export default Welcome