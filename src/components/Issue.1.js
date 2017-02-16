import React from 'react'

const Issue = ({ title, userPriority, totalPriority, lastUserUpdate }) => (
  <div>
    <div className="title">{title}</div>
    <div className="user-priority">{userPriority} : {lastUserUpdate}</div>
    <div className="total-priority">{totalPriority}</div>
  </div>
)

export default Issue
