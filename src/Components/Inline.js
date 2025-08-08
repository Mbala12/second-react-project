import React from 'react'

const heading ={
    fontSize: '80px',
    color: 'Gray'
}

function Inline() {
  return (
    <div>
        <h1 className='error'>Error from AppStyles in Inline</h1>
        {/* <h1 style={heading}>Inline</h1> */}
    </div>
  )
}

export default Inline