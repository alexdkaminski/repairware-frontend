import React, { useState } from 'react'

const JobForm = ({ createJob }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [model, setModel] = useState('')
  const [quote, setQuote] = useState('')
  const [password, setPassword] = useState('')
  const [description, setDescription] = useState('')

  const addJob = (event) => {
    event.preventDefault()
    createJob({
      name,
      phone,
      email,
      address,
      model,
      quote,
      password,
      description
    })
  }

  return (
    <form onSubmit={addJob}>
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Customer Information
          </h3>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input value={name} onChange={({target}) => setName(target.value)} id="name" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="phone" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Phone
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input value={phone} onChange={({target}) => setPhone(target.value)} id="phone" type="tel" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Email
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input value={email} onChange={({target}) => setEmail(target.value)} id="email" type="email" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="address" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Address
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input value={address} onChange={({target}) => setAddress(target.value)} id="address" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          {/* <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="street_address" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Street address
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm">
                <input id="street_address" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="city" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              City
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input id="city" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="state" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              State / Province
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input id="state" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="zip" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              ZIP / Postal
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input id="zip" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 pt-8 sm:mt-5 sm:pt-10">
            Device Information
          </h3>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="model" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Model
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input value={model} onChange={({target}) => setModel(target.value)} id="model" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="quote" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Quote
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input value={quote} onChange={({target}) => setQuote(target.value)} id="quote" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Password
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input value={password} onChange={({target}) => setPassword(target.value)} id="password" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="description" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Description
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg flex rounded-md shadow-sm">
                <textarea value={description} onChange={({target}) => setDescription(target.value)} id="description" rows="3" className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Write a few sentences about the problem.</p>
            </div>
          </div>

          {/* <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="street_address" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              Street address
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm">
                <input id="street_address" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="city" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              City
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input id="city" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="state" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              State / Province
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input id="state" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="zip" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
              ZIP / Postal
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <input id="zip" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Notifications
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
              We&apos;ll always let you know about important changes, but you pick what else you want to hear about.
            </p>
          </div>
          <div className="mt-6 sm:mt-5">
            <div className="sm:border-t sm:border-gray-200 sm:pt-5">
              <div role="group" aria-labelledby="label-email">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div className="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700" id="label-email">
                      By Email
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label htmlFor="comments" className="font-medium text-gray-700">Comments</label>
                          <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input id="candidates" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                          </div>
                          <div className="ml-3 text-sm leading-5">
                            <label htmlFor="candidates" className="font-medium text-gray-700">Candidates</label>
                            <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input id="offers" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                          </div>
                          <div className="ml-3 text-sm leading-5">
                            <label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
                            <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
              <div role="group" aria-labelledby="label-notifications">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div className="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700" id="label-notifications">
                      Push Notifications
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="max-w-lg">
                      <p className="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                      <div className="mt-4">
                        <div className="flex items-center">
                          <input id="push_everything" name="push_notifications" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                          <label htmlFor="push_everything" className="ml-3">
                            <span className="block text-sm leading-5 font-medium text-gray-700">Everything</span>
                          </label>
                        </div>
                        <div className="mt-4 flex items-center">
                          <input id="push_email" name="push_notifications" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                          <label htmlFor="push_email" className="ml-3">
                            <span className="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                          </label>
                        </div>
                        <div className="mt-4 flex items-center">
                          <input id="push_nothing" name="push_notifications" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                          <label htmlFor="push_nothing" className="ml-3">
                            <span className="block text-sm leading-5 font-medium text-gray-700">No push notifications</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex justify-end">
          {/* <span className="inline-flex rounded-md shadow-sm">
            <button type="button" className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
              Cancel
            </button>
          </span> */}
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Save
            </button>
          </span>
        </div>
      </div>
    </form>
  )
}

export default JobForm