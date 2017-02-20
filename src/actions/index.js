export const SET_USER_DATA = 'SET_USER_DATA'
export const SHOW_AUTHENTICATION_PANEL = 'SHOW_AUTHENTICATION_PANEL'

export const setUserData = (user) => ({
  type: SET_USER_DATA,
  payload: {
    panel: false,
    user
  },
  saved: true
})

export const showAuthenticationPanel = {
  type: SHOW_AUTHENTICATION_PANEL,
  saved: true
}
