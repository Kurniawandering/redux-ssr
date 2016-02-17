import React from 'react'
import { match, browserHistory, Router } from 'react-router'
import { render } from 'react-dom'
import routes from './routes/Index'

if (process.env.BROWSER) {
    require('./styles/manifest.scss');
}

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

match({ routes, location, browserHistory }, (error, redirectLocation, renderProps) => {
    render(
        <Router {...renderProps} />, 
        document.getElementById('app')
    )
})
