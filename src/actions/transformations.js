export const ADD_ISSUE = 'ADD_ISSUE'

export const addIssue = (title, description) => ({
  type: ADD_ISSUE,
  payload: {
    id: null,
    title,
    description
  }
})
