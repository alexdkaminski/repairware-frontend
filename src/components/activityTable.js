import React from 'react'
import moment from 'moment'
import { statusColor } from '../utils'

const Activity = ({ job }) => {
  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900">
        <div className="flex">
          <a href={`/jobs/${job.id}`} className="group inline-flex space-x-2 truncate text-sm leading-5">
            <p className="text-cool-gray-900 group-hover:text-cool-gray-900 transition ease-in-out font-medium duration-150">
              {job.name}
            </p>
          </a>
        </div>
      </td>
      <td className="max-w-0 w-full px-6 py-4 truncate text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
        {job.model} 
      </td>
      <td className="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
        ${job.quote} 
      </td>
      <td className="hidden px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-500 md:block">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 capitalize bg-${statusColor(job.status)}-100 text-${statusColor(job.status)}-800`}>
          {job.status}
        </span>
      </td>
      <td className="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
        {moment(job.date).format('LL')}
      </td>
    </tr>
  )
}

const ActivityTable = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <>
        <p>There are currently no jobs logged in the system.</p>
      </>
    )
  }
  return (
    <div className="hidden sm:block">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col mt-2">
        <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-cool-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="hidden px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider md:block">
                  Status
                </th>
                <th className="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-cool-gray-200">

              {jobs.map(job =>
                <Activity key={job.id} job={job}/>
              )}
            
            </tbody>

          </table>
          {/* Pagination */}
          {/* <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-cool-gray-200 sm:px-6">
            <div className="hidden sm:block">
              <p className="text-sm leading-5 text-cool-gray-700">
                Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">10</span>
                of
                <span className="font-medium">20</span>
                results
              </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
              <a href="/" className="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150">
                Previous
              </a>
              <a href="/" className="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150">
                Next
              </a>
            </div>
          </nav> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ActivityTable