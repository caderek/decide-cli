import {
  SHOW_LOGIN_PAGE,
  SET_USER_DATA
} from '../actions'

function authentication (state = {}, action) {
  switch (action.type) {
    case SHOW_LOGIN_PAGE:
      return {
        ...state,
        ...{ authenticated: false }
      }
    case SET_USER_DATA:
      return {
        ...state,
        ...{
          authenticated: true,
          user: action.payload.user
        }
      }
    default:
      return state
  }
}

export default authentication
