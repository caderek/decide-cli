import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IssueList from '../containers/IssueList'
import Menu from '../containers/Menu'
import { browserHistory } from 'react-router'
import store from '../store'

if (store.getState().authentication.authenticated === false) {
  browserHistory.push('/login')
}

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <div>
      <Menu />
      <IssueList />
    </div>
  </MuiThemeProvider>
)

export default App
