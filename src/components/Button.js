import React from 'react'

const Button = ({ buttonLabel, buttonAction, type }) => {

  const buttonClick = () => {
    buttonAction()
  }
 
  return (
    <button onClick={buttonClick} type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700 transition duration-150 ease-in-out">
      {buttonLabel}
    </button>
  )
}

export default Button