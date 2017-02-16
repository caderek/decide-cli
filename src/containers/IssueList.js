import { connect } from 'react-redux'
import IssueList from '../components/IssueList'

const prepareIssues = (issues) =>
  Object.keys(issues).map((issueId) => issues[issueId])

const mapStateToProps = (state) => ({
  issues: prepareIssues(state.issues)
})

export default connect(mapStateToProps)(IssueList)
