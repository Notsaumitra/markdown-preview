import React from 'react'

const Header = () => {
  return (
    <>
        <h1 className="mb-1 px-3 py-10 sm:px-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Markdown generator <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-600">Live Markdown Preview</span></h1>
        <p className="mb-1 px-2 py-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-32 xl:px-48 dark:text-gray-400 text-center">Enter markdown text to get html live from the server and raw html (remove default text to start editing)</p>
    </>
  )
}

export default Header