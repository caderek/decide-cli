import { connect } from 'react-redux'
import AuthenticationPanel from '../components/AuthenticationPanel'

const mapStateToProps = (state) => ({
  open: !state.authentication.signedIn
})

export default connect(mapStateToProps)(AuthenticationPanel)
