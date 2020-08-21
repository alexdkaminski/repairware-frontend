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
import Job from './components/job'

import loginService from './services/login' 
import jobService from './services/jobs'

function App() {
  const [jobs, setJobs] = useState([])
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [jobFormVisible, setJobFormVisible] = useState(false)
  const history = useHistory()
  const jobFormRef = React.createRef()

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
      setLoading(false)
    }
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
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const toggleJobForm = () => {
    setJobFormVisible(!jobFormVisible)
  }

  const goBack = () => {
    history.push('/')
  }

  const createJob = (jobObject) => {
    setJobFormVisible(false)
    jobService
      .create(jobObject)
      .then(returnedJob => {
        setJobs(jobs.concat(returnedJob))
      })
  }

  const match = useRouteMatch('/jobs/:id')

  const job = match
  ? jobs.find(job => job.id === match.params.id)
  : null

  console.log(user)

  if (loading) return null

  return (
    <Switch>
      <Route path="/login">
        <Notification/>
        <LoginForm 
          email={email} 
          password={password} 
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </Route>
      <Route path="/jobs/:id">
        <Layout pageTitle="Job details" buttonText="Back" buttonAction={goBack}>
          <Notification message={errorMessage}/>
          <Job job={job}/>
        </Layout>
      </Route>
      <Route path="/">
        {user ?
        <Layout pageTitle="Jobs" buttonText="New job" buttonAction={toggleJobForm}>
          <Notification message={errorMessage}/>
          <div className="sm:px-6 lg:px-8">
            {jobFormVisible ?
              <JobForm createJob={createJob} ref={jobFormRef}/>
            : ''}
          </div>
          <Jobs jobs={jobs}/>
        </Layout>
        : <Redirect to="/login"/>}
      </Route>
    </Switch>

  );
}

export default App;
