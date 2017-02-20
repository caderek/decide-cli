import { reducers } from 'decide-shared'
import authentication from './authentication'

const initialState = {
  authentication: {
    user: null,
    signedIn: false
  }
}

const decideApp = (state = initialState, action) => {
  if (action.type === 'INIT_STATE') {
    return { ...state, ...action.payload }
  }

  return {
    ...state,
    ...{
      issues: reducers.issues(state.issues, action),
      priorities: reducers.priorities(state.priorities, action),
      authentication: authentication(state.authentication, action)
    }
  }
}

export default decideApp
