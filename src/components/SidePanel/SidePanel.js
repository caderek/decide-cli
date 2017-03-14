import React from 'react'
import $ from './SidePanel.scss'
import Editor from '../../containers/Editor'
import Details from '../../containers/Details'
import SelectionMenu from './SelectionMenu'
import Info from './Info'

function SidePanel ({ view }) {
  const views = {
    details: <Details />,
    editor: <Editor />,
    info: <Info />,
    selectionMenu: <SelectionMenu />
  }

  return (
    <div className={$.sidePanel}>
      <div className={$.sidePanelContent}>
        {views[view]}
      </div>
    </div>
  )
}

export default SidePanel
