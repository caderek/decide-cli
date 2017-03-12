import React from 'react'
import Issue from './Issue'
import $ from './IssueList.scss'

const IssueList = ({ issues, addPriority }) => (
  <div className={$.issueList}>
    {issues.map(issue =>
      <Issue
        key={issue.id}
        {...issue}
        addPriority={addPriority}
      />
    )}
  </div>
)

export default IssueList
