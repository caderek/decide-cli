import React from 'react'
import $ from './Hello.scss'

const Hello = () => (
  <div className={$.hello}>
    <img src='logo.png' alt='Logo' />
    <h2>Prioritize your{'\u00A0'}ideas with your{'\u00A0'}team.</h2>
  </div>
)

export default Hello
