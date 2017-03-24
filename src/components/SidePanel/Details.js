import React from 'react'
import ReactMarkdown from 'react-markdown'
import $ from './Details.scss'

const Rate = ({ author, priority }) => {
  const classType =
    (priority > 0 && 'positive') ||
    (priority === 0 && 'neutral') ||
    (priority < 0 && 'negative')

  return (
    <div className={$.rate}>
      {author}
      <div className={`${$.priority} ${$[classType]}`}>{priority}</div>
    </div>
  )
}

const Details = ({ issue, rates }) => {
  if (issue) {
    return (
      <div className={$.details}>
        <h2 className={$.title}>{issue.title}</h2>
        <p>
          <span className={$.sectionTitle}>Author:</span> {issue.author}
          {'\u00A0\u00A0\u00A0\u00A0'}
          <span className={$.sectionTitle}>Last update:</span> @todo
        </p>

        <section>
          <h3 className={$.sectionTitle}>Details:</h3>
          <div>
            <ReactMarkdown source={issue.description} />
          </div>
        </section>

        <section>
          <h3 className={$.sectionTitle}>Rates:</h3>
          <div className={$.rates}>
            {rates.map(rate => <Rate key={rate.id} author={rate.author} priority={rate.priority} />)}
          </div>
        </section>
      </div>
    )
  }

  return null
}

export default Details
