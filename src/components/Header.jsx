
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { modeCotext } from '../context/Contextshare'

function Header() {
  const {mode,setMode} = useContext(modeCotext)
  return (
    <div className='bg-neutral-200 w-full h-[80px] flex items-center'>
      <div className='ms-14 text-2xl font-semibold text-primary'>ArtBids</div>
      <div className='ms-auto me-10 flex items-center'> 
        <button onClick={()=>{mode=='dark'?setMode('light'):setMode('dark')}} className='me-5 text-2xl border-black border-2 rounded-[50%] w-10 h-10 group'>
          {mode=='dark'?
            <FontAwesomeIcon icon={faSun} className='group-hover:rotate-[-30deg] transition-transform duration-300 text-yellow-400' />
            :
            <FontAwesomeIcon icon={faMoon} className='group-hover:rotate-[-30deg] transition-transform duration-300' />
          }
        </button>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[50px] h-[50px] rounded-[50%] hover:border-primary hover:border-2 cursor-pointer' />
      </div>
    </div>
  )
}

export default Header