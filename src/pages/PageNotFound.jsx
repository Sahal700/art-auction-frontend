import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='grid grid-cols-3 pt-20 pb-60 dark:bg-neutral-800'>
      <div></div>
      <div><img className='w-full' src="https://comodosslstore.com/blog/wp-content/uploads/2024/01/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg" alt="" /></div>
      <div></div>
      <div className='col-span-3'><h1 className='text-center dark:text-white text-3xl font-medium mt-5'>Sorry this page didn't exist, <NavLink to={'/'} ><span className='underline cursor-pointer text-blue-500'>Back to Home</span></NavLink></h1></div>
    </div>
    
  )
}

export default PageNotFound