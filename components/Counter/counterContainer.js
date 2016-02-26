import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from './counterActions'
import Counter from './index'

const mapStateToProps = (state) => {
    return {
        number: state.count.number
    }
}

export default connect(
    mapStateToProps,
    { increase, decrease }
)(Counter)
