import React from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { increase, decrease } from './counterActions'

if (process.env.BROWSER) {
    require('./button.scss');
}

function Buttons({ number, increase, decrease }) {
    return (
        <div className="button-container">
            <button onClick={() => browserHistory.push('/')}>Go to home</button>
            Some state changes:
      {number}
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
       </div>
    )
}

export default connect(
    state => ({ number: state.count.number }),
    { increase, decrease }
)(Buttons)
