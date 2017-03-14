import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Menu from '../components/Menu/Menu'
import { changePanelView } from '../actions'

const mapState = (state) => ({
  user: state.authentication.user
})

const mapDispatch = (dispatch) => bindActionCreators({ changePanelView }, dispatch)

export default connect(mapState, mapDispatch)(Menu)
