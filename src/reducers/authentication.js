import { SET_USER_DATA } from '../actions'

function authentication (state = {}, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...{
          signedIn: action.payload.signedIn,
          user: action.payload.user
        }
      }
    default:
      return state
  }
}

export default authentication
