import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Bidcard() {
  const navigate = useNavigate()
  return (
    <div className='bg-[#e2ffd3] rounded dark:bg-neutral-700'>
      <div className='relative'>
        <img onClick={()=>{navigate('/product')}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSrnMXZhKNBCATeHB-NQive9gjt6R2_eDOQ&s" alt="" className='w-full h-[200px] rounded-t' />
        <div className='absolute top-2 right-2 bg-orange-300 text-sm px-2 rounded-3xl'>bids 0</div>
        <div className='absolute bottom-2 left-2 text-2xl text-orange-300 hover:text-primary'><FontAwesomeIcon icon={faHeart}/></div>
      </div>
      <div className='px-3 pb-3'>
        <div className='flex justify-between items-center mt-2'>
          <h3 className='text-xl font-medium'>title</h3>
          <p className='text-sm'>Ends on : 10/10/2024</p>
        </div>
        <div className='flex justify-between items-center mt-3'>
          <p className='text-green-600'>Starting bid :<span className='font-[450]'> $40</span></p> 
          <button onClick={()=>navigate('/product')} className='bg-primary px-2 py-1 rounded hover:bg-phover'>Place Bid</button>
        </div>
      </div>
    </div>
  )
}

export default Bidcard