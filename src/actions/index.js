export const SET_USER_DATA = 'SET_USER_DATA'
export const SHOW_LOGIN_PAGE = 'SHOW_LOGIN_PAGE'
export const TOGGLE_ISSUE = 'TOGGLE_ISSUE'
export const CHANGE_PANEL_VIEW = 'CHANGE_PANEL_VIEW'
export const TAKE_SNAPSHOT = 'TAKE_SNAPSHOT'
export const AUTHENTICATE = 'AUTHENTICATE'

export const authenticate = (user, password) => ({
  type: AUTHENTICATE,
  payload: {
    user,
    password
  }
})

export const setUserData = (user) => ({
  type: SET_USER_DATA,
  payload: {
    user
  },
  saved: true
})

export const showLoginPage = {
  type: SHOW_LOGIN_PAGE,
  saved: true
}

export const toggleIssue = (issueId) => ({
  type: TOGGLE_ISSUE,
  payload: {
    issueId
  },
  saved: true
})

export const changePanelView = (view) => ({
  type: CHANGE_PANEL_VIEW,
  payload: {
    view
  },
  saved: true
})
