import { connect } from 'react-redux'
import IssueList from '../components/IssueList'
import values from 'lodash/values'
import groupBy from 'lodash/groupBy'
import mapValues from 'lodash/mapValues'


const prepareIssues = (issues, priorities, user) => {
  const groupedPriorities = groupBy(values(priorities), 'issueId')

  const totalPriorities = mapValues(groupedPriorities, (priorities) =>
    (priorities.reduce((result, priority) => result + priority.priority, 0) / priorities.length).toFixed(2)
  )

  const result = values(issues).map((issue) => {
    return {
      ...issue,
      ...{
        totalPriority: totalPriorities[issue.id],
        ratesCount: groupedPriorities[issue.id] ? groupedPriorities[issue.id].length : 0,
        userPriority: priorities[`${issue.id}.${user}`] ? priorities[`${issue.id}.${user}`].priority : undefined
      }
    }
  })

  return result
}

const mapStateToProps = (state) => ({
  issues: prepareIssues(state.issues, state.priorities, state.authentication.user)
})

export default connect(mapStateToProps)(IssueList)
