import React from 'react'
import { snap } from '../testHelpers'
import LoginForm from './LoginForm'

test('LoginForm renders correctly', () => snap(
  <LoginForm />
))
