import React from 'react'
import moment from 'moment'
import { statusColor } from '../utils'

const Activity = ({ job }) => {
  return (
    <li>
    <a href={`/jobs/${job.id}`} className="block px-4 py-4 bg-white hover:bg-cool-gray-50">
      <div className="flex items-center space-x-4">
        <div className="flex-1 flex space-x-2 truncate">
          <svg className="flex-shrink-0 h-5 w-5 text-cool-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <div className="text-cool-gray-500 text-sm truncate">
            <p className="text-cool-gray-900 font-medium">{job.name}</p>
            <p><span className="truncate">{job.model}</span></p>
            <p>{moment(job.date).format('LL')}</p>
          </div>
        </div>
        <div className="flex-1 flex space-x-2 truncate">
          <div className="text-cool-gray-500 text-sm truncate">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 capitalize ${statusColor(job.status)}`}>
          {job.status}
        </span>
          </div>
        </div>
        <div>
          <svg className="flex-shrink-0 h-5 w-5 text-cool-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </a>
  </li>
  )
}

const ActivityList = ({ jobs }) => {
  return (
    <div className="shadow sm:hidden">
    <ul className="mt-2 divide-y divide-cool-gray-200 overflow-hidden shadow sm:hidden">
      {jobs.map(job => 
        <Activity job={job} key={job.id}/>  
      )}
    </ul>
  </div>
  )
}

export default ActivityList