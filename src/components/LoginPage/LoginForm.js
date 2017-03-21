import React, { Component } from 'react'
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
    this.props.authenticate(this.state.user, this.state.password)
  }

  handleChange ({ target }) {
    this.setState({ [target.name]: target.value })
  }

  render () {
    return (
      <form className={$.loginForm} onSubmit={this.authenticate} >
        <input
          type='text'
          name='user'
          placeholder='user'
          value={this.state.user}
          onChange={this.handleChange}
          autoFocus
        />
        <input
          type='password'
          name='password'
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
