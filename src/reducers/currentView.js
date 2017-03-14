import {
  TOGGLE_ISSUE,
  CHANGE_PANEL_VIEW
} from '../actions'

function currentView (state = {}, action) {
  switch (action.type) {
    case TOGGLE_ISSUE:
      return toggleIssue(state, action.payload)
    case CHANGE_PANEL_VIEW:
      return changePanelView(state, action.payload)
    default:
      return state
  }
}

function toggleIssue (state, payload) {
  const { selectedIssues } = state
  const newSelectedIssues = selectedIssues.includes(payload.issueId)
    ? selectedIssues.filter(issueId => issueId !== payload.issueId)
    : [...selectedIssues, payload.issueId]

  return Object.assign({}, state, { selectedIssues: newSelectedIssues })
}

function changePanelView (state, payload) {
  return Object.assign({}, state, { panelView: payload.view })
}

export default currentView
