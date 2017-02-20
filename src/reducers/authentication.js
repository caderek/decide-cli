import {
  SHOW_AUTHENTICATION_PANEL,
  SET_USER_DATA
} from '../actions'

function authentication (state = {}, action) {
  switch (action.type) {
    case SHOW_AUTHENTICATION_PANEL:
      return {
        ...state,
        ...{ panel: true }
      }
    case SET_USER_DATA:
      return {
        ...state,
        ...{
          panel: action.payload.panel,
          user: action.payload.user
        }
      }
    default:
      return state
  }
}

export default authentication
