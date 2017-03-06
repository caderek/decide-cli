import React from 'react'
import LoginForm from './LoginForm'
import Hello from './Hello'
import $ from './LoginPage.scss'

const LoginPage = ({ authenticated }) => (
  <div className={$.loginPage} style={{
    display: authenticated ? 'none' : 'flex'
  }}>
    <div>
      <Hello />
      <LoginForm />
    </div>
  </div>
)

export default LoginPage
