import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import socket from '../socket'

class AuthenticationPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.authenticate = this.authenticate.bind(this)
  }

  authenticate () {
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
      <Dialog open={this.props.open}>
        <TextField
          floatingLabelText="User"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <br/>
        <TextField
          type="password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br/>
        <RaisedButton label="OK" primary onClick={this.authenticate} />
      </Dialog>
    )
  }
}


export default AuthenticationPanel
