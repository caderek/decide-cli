import React from 'react'
import Issue from './Issue'
import $ from './IssueList.scss'

const IssueList = ({ issues, selected, addPriority, toggleIssue, changePanelView }) => (
  <div className={$.issueList}>
    {issues.map(issue =>
      <Issue
        key={issue.id}
        {...issue}
        selected={issue.id === selected}
        addPriority={addPriority}
        toggleIssue={toggleIssue}
        changePanelView={changePanelView}
      />
    )}
  </div>
)

export default IssueList
