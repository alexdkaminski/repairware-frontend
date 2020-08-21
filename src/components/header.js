import React from 'react'

// const NewJobButton = () => {
//   return (
//     <>
//     { buttonText ? 
//       <button onClick={newJobClick} type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700 transition duration-150 ease-in-out">
//         {buttonLabel}
//       </button>
//       : ''}
//     </>
//   )
// }

// const BackButton = () => {
//   return (
//     <>
//     { buttonText ? 
//       <button onClick={backClick} type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700 transition duration-150 ease-in-out">
//         {buttonLabel}
//       </button>
//       : ''}
//     </>
//   )
// }

const Header = ({ pageTitle, children }) => {
  return (
    <header className="py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
      <div className="flex-1">
        <h1 className="text-3xl leading-9 font-bold text-white">
          {pageTitle}
        </h1>
      </div>
      <div className="flex">
        {children}
      </div>
    </div>
  </header>
  )
}

export default Header