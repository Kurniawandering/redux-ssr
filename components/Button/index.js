import React from 'react'
import { Link, browserHistory } from 'react-router'

if (process.env.BROWSER) {
    require('./button.scss');
}

export default () => (
    
    <div className="button-container">
        <button onClick={() => browserHistory.push('/')}>Go to home</button>
    </div>
)
