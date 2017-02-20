export const SET_USER_DATA = 'SET_USER_DATA'

export const setUserData = (user) => ({
  type: SET_USER_DATA,
  payload: {
    signedIn: true,
    user
  },
  saved: true
})
