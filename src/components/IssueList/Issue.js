import React from 'react'
import $ from './Issue.scss'

const Priority = ({ value, issueId, title, className, size, userPriority, addPriority }) => {
  const fullSize = 21
  const top = (-fullSize + size) / 2

  return (
    <label>
      <input
        type='radio'
        name={`priority${issueId}`}
        defaultChecked={value === userPriority}
      />
      <span title={title} className={className} onClick={() => addPriority(issueId, value)} style={{
        width: size,
        height: size,
        top
      }} />
    </label>
  )
}

function Issue ({
  id,
  author,
  title,
  totalPriority,
  userPriority,
  ratesCount,
  selected,
  addPriority,
  toggleIssue
}) {
  return (
    <div
      className={`${$.issue} ${selected ? $.selected : ''}`}
      onClick={() => toggleIssue(id)}
    >
      <h2><span className={$.author}>{author} -></span> {title}</h2>

      <div className={$.average}>
        Average: {totalPriority || '---'}{'\u00A0'}{'\u00A0'}
        ({ratesCount} rates)
      </div>

      <p className={$.priorityLabel}>Priority:</p>
      <div className={$.priorities}>
        <Priority
          issueId={id}
          value={-4}
          className={$.negative}
          size={21}
          addPriority={addPriority}
          userPriority={userPriority}
          title='NEVER'
        />
        <Priority
          issueId={id}
          value={-2}
          className={$.negative}
          size={17}
          addPriority={addPriority}
          userPriority={userPriority}
          title='BETTER NOT'
        />
        <Priority
          issueId={id}
          value={0}
          className={$.neutral}
          size={13}
          addPriority={addPriority}
          userPriority={userPriority}
          title='NEUTRAL'
        />
        <Priority
          issueId={id}
          value={1}
          className={$.positive}
          size={15}
          addPriority={addPriority}
          userPriority={userPriority}
          title='NICE TO HAVE'
        />
        <Priority
          issueId={id}
          value={2}
          className={$.positive}
          size={17}
          addPriority={addPriority}
          userPriority={userPriority}
          title='SOON'
        />
        <Priority
          issueId={id}
          value={3}
          className={$.positive}
          size={19}
          addPriority={addPriority}
          userPriority={userPriority}
          title='IMPORTANT'
        />
        <Priority
          issueId={id}
          value={4}
          className={$.positive}
          size={21}
          addPriority={addPriority}
          userPriority={userPriority}
          title='ASAP'
        />
      </div>
    </div>

  )
}

export default Issue
