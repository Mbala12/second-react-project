import React from 'react'

/* function Greet(){
    return <h1>Hello Apoulah!</h1>
}
export default Greet */

//export const Greet = () => <h1>Hello, Apoulah!</h1>

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}. Your age is {props.age}</h1>
            {props.children}
        </div>
    )
}

export default Greet