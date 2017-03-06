import React from 'react'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle
} from 'material-ui/Toolbar'
import { browserHistory } from 'react-router'

const Menu = ({ user }) => (
  <Toolbar>
    <ToolbarTitle text='Decide App' />
    <ToolbarGroup>
      {user !== null ? <span>User: {user}</span> : null} | <span onClick={() => {
        window.localStorage.removeItem('jwt')
        browserHistory.push('/login')
      }} style={{ cursor: 'pointer' }}>log out</span>
    </ToolbarGroup>
  </Toolbar>
)

export default Menu
