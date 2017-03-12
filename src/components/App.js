import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import IssueList from '../containers/IssueList'
import Details from './Details/Details'
import Menu from '../containers/Menu'
import { browserHistory } from 'react-router'
import store from '../store'
import $ from './App.scss'

if (store.getState().authentication.authenticated === false) {
  browserHistory.push('/login')
}

injectTapEventPlugin()

const App = () => (
  <div className={$.main}>
    <Menu />
    <IssueList />
    <Details />
  </div>
)

export default App
