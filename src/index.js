import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import decideApp from './reducers'
import App from './components/App'
import './index.css'

let store = createStore(decideApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
