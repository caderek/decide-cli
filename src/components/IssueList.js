import React from 'react'
import Issue from './Issue'

const IssueList = ({ issues }) => (
  <div>
    {issues.map(issue =>
      <Issue
        key={issue.id}
        {...issue}
      />
    )}
  </div>
)

export default IssueList
