import React, { Component } from 'react'
import socket from '../../socket'
import $ from './LoginForm.scss'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.authenticate = this.authenticate.bind(this)
  }

  authenticate (event) {
    event.preventDefault()

    socket.emit('authenticate', {
      user: this.state.user,
      password: this.state.password
    })
  }

  handleChange ({ target }) {
    const field = target.type === 'text' ? 'user' : 'password'
    this.setState({ [field]: target.value })
  }

  render () {
    return (
      <form className={$.loginForm} onSubmit={this.authenticate} >
        <input
          type='text'
          placeholder='user'
          value={this.state.user}
          onChange={this.handleChange}
          autoFocus
        />
        <input
          type='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type='submit' value='log in' />
      </form>
    )
  }
}

export default LoginForm
