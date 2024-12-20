import React, { useEffect, useState } from 'react'
import Bidcard from '../components/Bidcard'
import { IoSearch } from "react-icons/io5";
import { getAllAuctionApi, getUserApi } from '../services/allApi';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'

function Home() {
  const [allAuction,setAllAuction]=useState([])
  const navigate = useNavigate()
  // const [user,setUser] = useState({})
  // const [addfavourite,setAddFavourite] = useState({})
  // console.log(user);
  
  const getAllAuction = async() =>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      const result = await getAllAuctionApi(reqHeader)
      
      if (result.status==200) {
        setAllAuction(result.data)
      }
    }
    // if(sessionStorage.getItem("token")){
    //   const token = sessionStorage.getItem("token")
    //   const reqHeader = {
    //     "Content-Type" : "application/json",
    //     "Authorization" : `Bearer ${token}`
    //   }
    //   const result1 = await getUserApi(reqHeader)
    //   if (result1.status==200) {
    //     setUser(result1.data)
    //   }
    // }
  }
  useEffect(()=>{
    getAllAuction()
  },[])
  return (
    <>
      <Header/>
      <div className="dark:bg-neutral-800 dark:text-white pt-[80px] pb-10">
        {/* first section */}
        <section className="relative bg-neutral-900 text-white h-[90vh] flex flex-col md:flex-row items-center justify-between px-5 md:px-20">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-[#FFE47A] rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
          </div>
          <div className="relative md:w-1/2 space-y-6 mt-28 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Discover, Bid,<br />
            Own
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Explore rare and extraordinary artwork curated just for you.
            </p>
            <div className="flex">
              <button onClick={()=>navigate('/auctions')} className="px-6 py-3 bg-[#FFE47A] text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-200">
                Start Bidding
              </button>
            </div>
          </div>
  
          <div className="relative mt-10 md:mt-0 md:w-1/2 hidden md:flex justify-center items-center">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/painting-auction-illustration-download-in-svg-png-gif-file-formats--art-gallery-buyers-bargain-bidding-at-pack-abstract-illustrations-4659141.png?f=webp" alt="" />
          </div>
          <div id='products' className='mt-auto mb-16'></div>
        </section>
        {/* auctions */}
        <div className='pt-10 md:ps-20 px-5 mb-5 md:w-[40%]'>
          <div className="relative">
          <button className="absolute inset-y-0 end-0 flex items-center pe-3">
          <IoSearch className='text-xl'/>
          </button>
          <input type="search" id="default-search" className="block w-full p-4 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search "/>
          </div>
        </div>
        <div className='md:grid grid-cols-[repeat(1,1fr_1fr_1fr_1fr)] gap-x-10 gap-y-5 md:px-20 px-5 dark:bg-neutral-800  dark:text-white'>
         {allAuction?.length>0 && allAuction.map((item)=>(<div className='mt-3 md:mt-0 rounded-md'><Bidcard auction={item}/></div>))}
        </div>
      </div>
    </>
  )
}

export default Home