import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { snap } from '../testHelpers'
import LoginPage from './LoginPage'

test('renders correctly', () => snap(
  <Provider store={createStore(() => {})}>
    <LoginPage authenticated />
  </Provider>
))
