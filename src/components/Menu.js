import React from 'react'
import { browserHistory } from 'react-router'
import $ from './Menu.scss'

const Menu = ({ user }) => (
  <div className={$.menu}>
    <span>Decide App | </span>
    {user !== null ? <span>User: {user}</span> : null} | <span onClick={() => {
      window.localStorage.removeItem('jwt')
      browserHistory.push('/login')
    }} style={{ cursor: 'pointer' }}>log out</span>
  </div>
)

export default Menu
