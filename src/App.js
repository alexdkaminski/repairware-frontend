import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useRouteMatch
} from 'react-router-dom'

import './tailwind.output.css';

import Layout from './components/layout'
import Jobs from './components/jobs'
import LoginForm from './components/loginForm'
import Notification from './components/notification'
import JobForm from './components/jobForm'
import JobFormEdit from './components/jobFormEdit'
import Job from './components/job'

import loginService from './services/login' 
import jobService from './services/jobs'

function App() {
  const [jobs, setJobs] = useState([])
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [userLoading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [jobFormVisible, setJobFormVisible] = useState(false)
  const [jobButtonLabel, setJobButtonLabel] = useState('New job')
  const [editJobButtonLabel, setEditJobButtonLabel] = useState('Edit')
  const [editJobStatus, setEditJobStatus] = useState(false)
  const history = useHistory()

  useEffect(() => {
    jobService
      .getAll()
      .then(initialJobs => {
        setJobs(initialJobs)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedJobappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      jobService.setToken(user.token)
    }
    setLoading(false)
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        email, password,
      })

      window.localStorage.setItem(
        'loggedJobappUser', JSON.stringify(user)
      ) 

      jobService.setToken(user.token)
      setUser(user)
      setEmail('')
      setPassword('')
      history.push('/')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const toggleJobForm = () => {
    setJobFormVisible(!jobFormVisible)
    if (jobButtonLabel === 'New job') {
      setJobButtonLabel('Cancel')
    } else {
      setJobButtonLabel('New job')
    }
  }

  const goBack = () => {
    history.push('/')
  }

  const createJob = (jobObject) => {
    setJobFormVisible(false)
    setJobButtonLabel('New job')
    jobService
      .create(jobObject)
      .then(returnedJob => {
        setJobs(jobs.concat(returnedJob))
      })
  }

  const updateJob = async (id, jobObject) => {
    try {
      const returnedJob = await jobService.update(id, jobObject)
      returnedJob.user = user
      console.log('returnedJob: ',returnedJob)
      let updatedJobs = jobs.map(job => job.id !== id ? job : returnedJob)
      setJobs(updatedJobs)
    } catch (error) {
      setErrorMessage(
        `Job '${jobObject.title}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const editJob = (id, jobObject) => {
    setEditJobButtonLabel(null)
    setEditJobStatus(true)
    console.log(id)
    console.log(jobObject)
    console.log('edit job')
  }

  const match = useRouteMatch('/jobs/:id')

  const job = match
  ? jobs.find(job => job.id === match.params.id)
  : null
  
  return (
    <Switch>
      <Route path="/login">
        <LoginForm 
          email={email} 
          password={password} 
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
          errorMessage={errorMessage}
        />
      </Route>
      <Route path="/jobs/:id">
        <Layout 
          pageTitle="Job details" 
          primaryButtonLabel="Back" 
          primaryButtonAction={goBack}
          secondaryButtonLabel={editJobButtonLabel}
          secondaryButtonAction={editJob}
        >
          <Notification message={errorMessage}/>
          {!editJobStatus && <Job job={job}/>}  
          {editJobStatus && <JobFormEdit job={job} updateJob={updateJob} setEditJobStatus={setEditJobStatus}/>}
        </Layout>
      </Route>
      <Route path="/">
        {user ?
        <Layout 
          pageTitle="Jobs" 
          primaryButtonLabel={jobButtonLabel} 
          primaryButtonAction={toggleJobForm}
        >
          <Notification message={errorMessage}/>
          <div className="sm:px-6 lg:px-8">
            {jobFormVisible ?
              <JobForm createJob={createJob}/>
            : ''}
          </div>
          <Jobs jobs={jobs}/>
        </Layout>
        : !userLoading ? <Redirect to="/login"/> : null}
      </Route>
    </Switch>

  );
}

export default App;
