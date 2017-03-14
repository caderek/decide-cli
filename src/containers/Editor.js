import { connect } from 'react-redux'
import Editor from '../components/SidePanel/Editor'
import { bindActionCreators } from 'redux'
import { actions } from 'decide-shared'
import { changePanelView } from '../actions'

const { addIssue } = actions

const mapDispatch = (dispatch) => bindActionCreators({ addIssue, changePanelView }, dispatch)

export default connect(null, mapDispatch)(Editor)
