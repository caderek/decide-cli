import { connect } from 'react-redux'
import Details from '../components/SidePanel/Details'
import filter from 'lodash/filter'

const mapStateToProps = ({ issues, priorities, currentView }) => {
  const issueId = currentView.selectedIssues[0]
  const issue = issues[issueId]
  const rates = filter(priorities, (rate, id) => id.startsWith(issueId))

  return {
    issue,
    rates
  }
}

export default connect(mapStateToProps)(Details)
