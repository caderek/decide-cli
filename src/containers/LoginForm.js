import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authenticate } from '../actions'
import LoginForm from '../components/LoginPage/LoginForm'

const mapDispatch = (dispatch) => bindActionCreators({ authenticate }, dispatch)
export default connect(null, mapDispatch)(LoginForm)

