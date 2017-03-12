import React, { Component } from 'react'
import $ from './Editor.scss'

class Editor extends Component {
  constructor (props) {
    super(props)

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      title: '',
      description: ''
    }
  }

  handleTitleChange ({ target }) {
    window.localStorage.setItem('editorTitle', target.value)
    this.setState({ title: target.value })
  }

  handleDescriptionChange ({ target }) {
    this.setState({ description: target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.addIssue(this.state.title, this.state.description)
    this.setState({
      title: '',
      description: ''
    })
  }

  render () {
    return (
      <form className={$.editor} onSubmit={this.handleSubmit}>
        <textarea
          className={$.title}
          placeholder='Add title (required)'
          onChange={this.handleTitleChange}
          value={this.state.title}
        />
        <textarea
          className={$.description}
          placeholder='Add description (optional)'
          onChange={this.handleDescriptionChange}
          value={this.state.description}
        />
        <input type='submit' value='OK' />
      </form>
    )
  }
}

export default Editor
