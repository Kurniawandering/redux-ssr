import React from 'react'
import { render } from 'react-dom'
import routes from './routes/Index'

import { Provider } from 'react-redux'
import { Router, browserHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore, DevTools } from './stores/store'

if (process.env.BROWSER) {
    require('./styles/manifest.scss');
}
const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

const store = configureStore(browserHistory, window.__initialState__)
const history = syncHistoryWithStore(browserHistory, store)

match({ routes, location, history }, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router {...renderProps} />
        </Provider>, 
        document.getElementById('app')
    )
})

if (process.env.NODE_ENV === 'development') {
    // Ideally, the 'app' should be rendered this way
    render(
    <Provider store={store}>
        <DevTools/>
    </Provider>,
    document.getElementById('devtools')
    )
}

