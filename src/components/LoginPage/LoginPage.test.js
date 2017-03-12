import React from 'react'
import { snap } from '../testHelpers'
import LoginPage from './LoginPage'

test.skip('renders correctly', () => snap(
  <LoginPage authenticated />
))
