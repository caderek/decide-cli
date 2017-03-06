import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage/LoginPage'

const mapStateToProps = (state) => ({
  open: state.authentication.panel
})

export default connect(mapStateToProps)(LoginPage)
