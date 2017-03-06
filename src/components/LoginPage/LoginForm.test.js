import React from 'react'
import { snap } from '../testHelpers'
import LoginForm, { LoginInput, LoginSubmit } from './LoginForm'

test('LoginForm renders correctly', () => snap(
  <LoginForm />
))

test('LoginInput renders correctly', () => snap(
  <LoginInput type='foo' placeholder='bar' />
))

test('LoginSubmit renders correctly', () => snap(
  <LoginSubmit />
))
