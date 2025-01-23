import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import Bidcard from '../components/Bidcard'
import { getAllAuctionApi } from '../services/allApi'
import Header from '../components/Header'
function Auctions() {
  const [allAuction,setAllAuction]=useState([])

  const getAllAuction = async() =>{
    
      const result = await getAllAuctionApi()
      if (result.status==200) {
        setAllAuction(result.data)
      }
  }

  useEffect(()=>{
    getAllAuction()
  },[])
  return (
    <>
      <Header/>
      <div className='dark:bg-neutral-800 dark:text-white pt-[100px] pb-10'>
        <div className='pt-10 md:ps-20 px-5 mb-5 md:w-[40%]'>
          <div className="relative">
          <button className="absolute inset-y-0 end-0 flex items-center pe-3">
          <IoSearch className='text-xl'/>
          </button>
          <input type="text" id="default-search" className="block w-full p-4 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search "/>
          </div>
        </div>
        <div className='md:grid grid-cols-[repeat(1,1fr_1fr_1fr_1fr)] gap-x-10 gap-y-5 md:px-20 px-5 dark:bg-neutral-800  dark:text-white'>
         {allAuction?.length>0 && allAuction.map((item)=>(<div className='mt-3 md:mt-0 rounded-md'><Bidcard auction={item}/></div>))}
        </div>
      </div>
    </>
  )
}

export default Auctions