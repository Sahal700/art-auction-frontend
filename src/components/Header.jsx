
import { faBars, faMoon, faSun, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { modeCotext } from '../context/Contextshare'
import { Link } from 'react-router-dom'

function Header() {
  const[navExpand,setNavExpand]=useState(false)
  const {mode,setMode} = useContext(modeCotext)
  return (
    <div className='relativw'>
      <div className='bg-neutral-50 dark:bg-neutral-800 dark:text-white w-full h-[80px] flex items-center fixed border-b-[1px] dark:border-b-neutral-500'>
        <Link to={'/'}><div className='md:ms-14 ms-5 text-2xl font-semibold text-primary'>ArtBids</div></Link>
         {/*  group-focus:w-full */}
        <div className='hidden md:flex justify-center font-medium w-full items-center'>
          <Link to={'/'} className='mx-4 p-2 group'>
            Home
            <div class="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link className='mx-4 p-2 group'>
            About Us
            <div class="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link to={'/mybids'} className='mx-4 p-2 group'>
            My Bids
            <div class="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link className='mx-4 p-2 group'>
            Artists
            <div class="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          {/* <Link className='mx-4 p-2 group'>
            Live Bids
            <div class="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link> */}
          <Link to={'/favorite'} className='mx-4 p-2 group'>
            Favorite
            <div class="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
        </div>
        {navExpand && <div className='md:hidden justify-center ps-5 pb-5 dark:bg-neutral-800 font-medium w-full bg-neutral-50 flex flex-col top-[78px] absolute'>
          <Link to={'/'} className=''>
            Home
          </Link>
          <Link className='mt-3'>
            About Us
          </Link>
          <Link to={'/mybids'} className='mt-3'>
            My Bids
          </Link>
          <Link className='mt-3'>
            Artists
          </Link>
          {/* <Link className='mt-3'>
            Live Bids
          </Link> */}
          <Link to={'/favorite'} className='mt-3'>
            Favorite
          </Link>
          <button className='flex mt-3 items-center w-min bg-primary py-2 px-3 rounded font-medium hover:bg-phover'><FontAwesomeIcon icon={faUser} className='me-2'/>Login</button>
        </div>}
        <div className='ms-auto md:me-10 me-5 flex items-center'> 
          <button onClick={()=>{mode=='dark'?setMode('light'):setMode('dark')}} className='me-5 text-2xl border-black dark:border-yellow-400 border-2 rounded-[50%] min-w-10 h-10 group'>
            {mode=='dark'?
              <FontAwesomeIcon icon={faSun} className='group-hover:rotate-[-30deg] transition-transform duration-300 text-yellow-400' />
              :
              <FontAwesomeIcon icon={faMoon} className='group-hover:rotate-[-30deg] transition-transform duration-300' />
            }
          </button>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[50px] h-[50px] rounded-[50%] hover:border-primary hover:border-2 cursor-pointer md:me-0 me-4' />
          {/* <button className='hidden md:flex items-center bg-primary py-2 px-3 rounded font-medium hover:bg-phover'><FontAwesomeIcon icon={faUser} className='me-2'/>Login</button> */}
          {<button onClick={()=>setNavExpand(!navExpand)} className='text-2xl flex items-center md:hidden'>{navExpand?<FontAwesomeIcon icon={faX} className='ms-[3px]'/>:<FontAwesomeIcon icon={faBars}/>}</button>}
        </div>
      </div>
    </div>
  )
}

export default Header