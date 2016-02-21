import React from 'react'
import { render } from 'react-dom'
import routes from './routes/Index'

import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore } from './stores/store'

if (process.env.BROWSER) {
    require('./styles/manifest.scss');
}

// const { pathname, search, hash } = window.location
// const location = `${pathname}${search}${hash}`

const store = configureStore(browserHistory, window.__initialState__)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)


// match({ routes, location, browserHistory }, (error, redirectLocation, renderProps) => {
//     render(
//         <Provider store={store}>
//             <Router {...renderProps} />, 
//         document.getElementById('app')
//     )
// })
