import React from 'react'
import ActivityList from './activityList'
import ActivityTable from './activityTable'

const Jobs = ({ jobs }) => {

  return (
    <>
      <ActivityList jobs={jobs}/>
      <ActivityTable jobs={jobs}/>
    </>
  )
}

export default Jobs