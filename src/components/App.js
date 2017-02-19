import React from 'react'
import LoginPanel from '../components/LoginPanel'
import IssueList from '../containers/IssueList'

const App = () => (
  <div>
    {window.localStorage.getItem('jwt') === undefined ? <LoginPanel /> : null}
    <IssueList />
  </div>
)

export default App
