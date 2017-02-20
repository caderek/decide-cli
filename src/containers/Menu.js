import { connect } from 'react-redux'
import Menu from '../components/Menu'

const mapStateToProps = (state) => ({
  user: state.authentication.user
})

export default connect(mapStateToProps)(Menu)
