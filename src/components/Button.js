import React from 'react'

const Button = ({ buttonLabel, buttonAction, type }) => {

  const buttonClick = () => {
    buttonAction()
  }
 
  let classes

  if (type === 'primary') {
    classes = 'inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700 transition duration-150 ease-in-out'
  } else if (type === 'secondary') {
    classes = 'inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150'
  }

  return (
    <button onClick={buttonClick} type="button" className={classes}>
      {buttonLabel}
    </button>
  )
}

export default Button