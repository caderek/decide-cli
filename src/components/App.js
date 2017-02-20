import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AuthenticationPanel from '../containers/AuthenticationPanel'
import IssueList from '../containers/IssueList'
import Menu from '../containers/Menu'

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <div>
      <AuthenticationPanel />
      <Menu />
      <IssueList />
    </div>
  </MuiThemeProvider>
)

export default App
