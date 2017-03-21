import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage/LoginPage'

const mapState = (state) => ({
  open: state.authentication.panel
})

export default connect(mapState)(LoginPage)
