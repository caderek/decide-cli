import { connect } from 'react-redux'
import SidePanel from '../components/SidePanel/SidePanel'

const mapState = ({ currentView }) => {
  const { selectedIssues, panelView } = currentView
  let view = ''

  if (panelView === 'preview') {
    if (selectedIssues.length === 0) {
      view = 'info'
    } else if (selectedIssues.length === 1) {
      view = 'details'
    } else {
      view = 'selectionMenu'
    }
  } else {
    view = 'editor'
  }

  return {
    view
  }
}

export default connect(mapState)(SidePanel)
