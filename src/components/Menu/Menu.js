import React from 'react'
import { browserHistory } from 'react-router'
import $ from './Menu.scss'

const Menu = ({ user, changePanelView }) => (
  <div className={$.menu}>
    <span>Decide App | </span>
    {user !== null ? <span>User: {user}</span> : null}
    | <span onClick={() => {
      window.localStorage.removeItem('jwt')
      browserHistory.push('/login')
    }} style={{ cursor: 'pointer' }}>log out</span>
    | <span onClick={() => changePanelView('editor')} style={{ cursor: 'pointer' }}>add</span>
  </div>
)

export default Menu
