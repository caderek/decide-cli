import { connect } from 'react-redux'
import IssueList from '../components/IssueList'

export const prepareIssues = (issues, user) => {
  return issues.map(issue => ({
    id: issue.id,
    title: issue.title,
    lastUserUpdate: new Date(issue.lastUserUpdate).toLocaleDateString(),
    userPriority: issue.priorities
      .filter(priority => priority.user === user)[0].value,
    totalPriority: (
      issue.priorities
        .map(priority => priority.value)
        .reduce((prev, next) => prev + next) / issue.priorities.length
    ).toFixed(2)
  }))
}

const mapStateToProps = (state) => ({
  issues: prepareIssues(state.issues, state.user)
})

export default connect(mapStateToProps)(IssueList)
