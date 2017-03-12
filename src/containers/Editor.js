import { connect } from 'react-redux'
import Editor from '../components/Details/Editor'
import { bindActionCreators } from 'redux'
import { actions } from 'decide-shared'

const { addIssue } = actions

const mapDispatchToProps = (dispatch) => bindActionCreators({ addIssue }, dispatch)

export default connect(null, mapDispatchToProps)(Editor)
