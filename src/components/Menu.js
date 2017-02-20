import React from 'react'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle
} from 'material-ui/Toolbar'

const Menu = ({ user }) => (
  <Toolbar>
    <ToolbarTitle text="Decide App" />
    <ToolbarGroup>
      {user !== null ? <span>User: {user}</span> : null}
    </ToolbarGroup>
  </Toolbar>
)

export default Menu
