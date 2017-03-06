import React from 'react'
import Issue from './Issue'

const IssueList = ({ issues, addPriority }) => (
  <div style={{
    padding: '5px'
  }}>
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
