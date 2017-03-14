import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import $ from './Editor.scss'

class Editor extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange ({ target }) {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.addIssue(this.state.title, this.state.description)
    this.props.changePanelView('preview')
    this.setState({
      title: '',
      description: ''
    })
  }

  render () {
    return (
      <div>
        <form className={$.editor} onSubmit={this.handleSubmit}>
          <textarea
            className={$.title}
            name='title'
            placeholder='Add title (required)'
            onChange={this.handleChange}
            value={this.state.title}
            autoFocus
          />
          <textarea
            className={$.description}
            name='description'
            placeholder='Add description (optional)'
            onChange={this.handleChange}
            value={this.state.description}
          />
          <input type='submit' value='OK' />
        </form>
        <ReactMarkdown source={this.state.description} />
      </div>
    )
  }
}

export default Editor
