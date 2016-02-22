import React from 'react'

if (process.env.BROWSER) {
    require('./hello.scss');
}

export default function HelloMessage() {
    return  <div className='hello-container'>
                <p>Hello world</p>
            </div>
}
