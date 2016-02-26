import React from 'react'
import { Link, browserHistory } from 'react-router'
import Counter from '../Counter/counterContainer'

if (process.env.BROWSER) {
    require('./button.scss');
}

export default () => (
    <div className="button-container">
        <button onClick={() => browserHistory.push('/')}>Go to home</button>
        <Counter />
    </div>
)
