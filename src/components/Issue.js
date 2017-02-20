import React from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'

const Issue = ({ title, totalPriority, userPriority, ratesCount }) => (
  <Card>
    <CardTitle title={title} />
    <CardText>
      <p>Total priority: {totalPriority || '---'} | Rates count: {ratesCount}</p>
      <p>User priority: {userPriority || '---'}</p>
    </CardText>
  </Card>
)

export default Issue
