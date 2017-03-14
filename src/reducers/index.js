import { reducers } from 'decide-shared'
import authentication from './authentication'
import currentView from './currentView'

const initialState = {
  authentication: {
    user: null,
    authenticated: Boolean(window.localStorage.getItem('jwt'))
  },
  currentView: {
    selectedIssues: [],
    panelView: 'preview' // preview / editor
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
      authentication: authentication(state.authentication, action),
      currentView: currentView(state.currentView, action)
    }
  }
}

export default decideApp
