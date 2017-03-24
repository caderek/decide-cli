import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'decide-shared'
import IssueList from '../components/IssueList/IssueList'
import { toggleIssue, changePanelView } from '../actions'
import values from 'lodash/values'
import groupBy from 'lodash/groupBy'
import mapValues from 'lodash/mapValues'

const prepareIssues = (issues, priorities, user) => {
  const groupedPriorities = groupBy(values(priorities), 'issueId')

  const totalPriorities = mapValues(groupedPriorities, (priorities) =>
    (priorities.reduce((result, priority) => result + priority.priority, 0) / priorities.length).toFixed(2)
  )

  const result = values(issues)
    .map((issue) => {
      return {
        ...issue,
        ...{
          totalPriority: totalPriorities[issue.id],
          ratesCount: groupedPriorities[issue.id] ? groupedPriorities[issue.id].length : 0,
          userPriority: priorities[`${issue.id}.${user}`] ? priorities[`${issue.id}.${user}`].priority : undefined
        }
      }
    })
    .reverse()

  return result
}

const mapStateToProps = (state) => ({
  issues: prepareIssues(state.issues, state.priorities, state.authentication.user),
  selected: state.currentView.selectedIssues[0]
})

const { addPriority } = actions
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    addPriority,
    toggleIssue,
    changePanelView
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IssueList)
