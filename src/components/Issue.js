import React from 'react'

const Issue = ({ title, description }) => (
  <div style={{
    borderBottom: 'solid 1px #aaa',
    padding: '10px',
    fontSize: '13px'
  }}>
    <h4 className="title">{title}</h4>
    <p className="description">{description}</p>
  </div>
)

export default Issue
