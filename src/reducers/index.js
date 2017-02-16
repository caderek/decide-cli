import { ADD_ISSUE } from '../actions/transformations'

const initialState = {
  issues: {}
}

function decideApp (state = initialState, action) {
  switch (action.type) {
    case ADD_ISSUE:
      return {
        ...state,
        ...{ issues: { ...state.issues, ...{ [action.payload.id]: action.payload } } }
      }
    default:
      return state
  }
}

export default decideApp
