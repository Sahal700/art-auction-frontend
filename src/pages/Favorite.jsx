import React from 'react'
import Bidcard from '../components/Bidcard'

function Favorite() {
  return (
    <div className='md:grid grid-cols-[repeat(1,1fr_1fr_1fr_1fr)] md:pt-[120px] pt-[100px] gap-x-10 gap-y-5 md:px-20 px-5 dark:bg-neutral-800  dark:text-white'>
        <div className='mt-3 md:mt-0 rounded-md'><Bidcard/></div>
        <div className='mt-3 md:mt-0 rounded-md'><Bidcard/></div>
        <div className='mt-3 md:mt-0 rounded-md'><Bidcard/></div>
        <div className='mt-3 md:mt-0 rounded-md'><Bidcard/></div>
        <div className='mt-3 md:mt-0 rounded-md'><Bidcard/></div>
        <div className='mt-3 md:mt-0 rounded-md'><Bidcard/></div>
        <div className='mt-3 md:mt-0 rounded-md'><Bidcard/></div>
        <div className='mt-3 md:mt-0 rounded-md'><Bidcard/></div>
    </div>
  )
}

export default Favorite