export const SET_USER_DATA = 'SET_USER_DATA'
export const SHOW_LOGIN_PAGE = 'SHOW_LOGIN_PAGE'

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
