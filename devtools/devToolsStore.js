import React from 'react'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { DevTool } from './devToolsContainer'
import reducers from '../components/Button/counterReducer'

export function configureStore(history, initialState) {
  
const reducer = combineReducers({
  count: reducers,
  routing: routerReducer
})


  let devTools = []
  if (typeof document !== 'undefined') {
    devTools = [ DevTool.instrument() ]
  }


  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      ),
      ...devTools
    )
  )

  return store
}
