import React from 'react'

export default ({  number, increase, decrease }) => (
    <div>    
        Some state changes:
        {number}
        <button onClick={() => increase(1)}>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
    </div>
)

