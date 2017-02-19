import { reducers } from 'decide-shared'

const decideApp = (state = {}, action) => {
  if (action.type === 'INIT_STATE') {
    return action.payload
  }

  return {
    issues: reducers.issues(state.issues, action)
  }
}

export default decideApp
