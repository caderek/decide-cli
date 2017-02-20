import { connect } from 'react-redux'
import AuthenticationPanel from '../components/AuthenticationPanel'

const mapStateToProps = (state) => ({
  open: state.authentication.panel
})

export default connect(mapStateToProps)(AuthenticationPanel)
