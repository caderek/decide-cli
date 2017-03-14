import React from 'react'
import ReactMarkdown from 'react-markdown'
import $ from './Details.scss'

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
          <div>
            {rates.map(rate => <p key={rate.id}>{rate.author}: {rate.priority}</p>)}
          </div>
        </section>
      </div>
    )
  }

  return null
}

export default Details
