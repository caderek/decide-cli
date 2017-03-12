import React from 'react'
import $ from './Details.scss'
import Editor from '../../containers/Editor'

const Details = () => (
  <div className={$.details}>
    <div className={$.detailsContent}>
      <Editor />
    </div>
  </div>
)

export default Details
