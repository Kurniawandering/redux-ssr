import React from 'react'

if (process.env.BROWSER) {
    require('./hello.scss');
}

export default () => (
    
    <div className='hello-container'>
        <p>Hello world</p>
    </div>
)
