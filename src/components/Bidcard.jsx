import { FaRegHeart } from "react-icons/fa";
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";
import { serverUrl } from "../services/serverUrl";
import { addFavouriteApi, removeFavouriteApi } from "../services/allApi";
import { loginResponseContext } from "../context/Contextshare";

function Bidcard({favourite,auction,setDeleteResponse}) {
  const [token,setToken] = useState("")
  const {loginResponse} = useContext(loginResponseContext)
  const navigate = useNavigate()
  
  const handleAddFavourite = async()=>{
    if (token) {
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      const result = await addFavouriteApi(auction._id,reqHeader)
      // console.log(result);
    }
  }
  const handleRemoveFavourite = async()=>{
    if (token) {
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      // console.log(auction._id);
      
      const result = await removeFavouriteApi(auction._id,reqHeader)
      // console.log(result);
      if (result.status==200) {
        setDeleteResponse(result.data)
      }
    }
  }

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  },[])
  return (
    <div className='bg-gradient-to-r bg-neutral-100 shadow-md rounded-md dark:bg-neutral-700 p-2'>
      <div className='flex items-center mb-2'>
        {/* need to update profile picture */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[40px] h-[40px] rounded-[50%]' />
        <p className='text-sm text-gray-800 dark:text-gray-300 ms-1'>{auction?.userId.username}</p>
        {favourite?<FaTrashAlt onClick={handleRemoveFavourite} className='ms-auto me-2 text-2xl'  />:<FaRegHeart onClick={handleAddFavourite} className='ms-auto me-2 text-primary text-2xl' />}
      </div>
      <div className='relative'>
        <img onClick={()=>{navigate(`/view-bid/${auction?._id}`)}} src={`${serverUrl}/upload/${auction?.image}`} alt="" className='w-full h-[200px] rounded' />
        <div className='absolute top-2 right-2 bg-orange-300 text-sm px-2 rounded-3xl'>bids {auction?.bids.length}</div>
      </div>
      <div className='px-2 pb-3'>
        <div className='flex justify-between items-center mt-2'>
          <h3 className='text-xl font-medium'>{auction?.title}</h3>
          <p className='text-sm'>Ends on : {auction?.endTime ? new Intl.DateTimeFormat("en-Gb").format(new Date(auction.endTime)) : "N/A"}</p>
        </div>
        <div className='flex justify-between items-center mt-3'>
          <div className="flex flex-col items-center justify-center">
            <p className='text-xs text-gray-800 dark:text-gray-300'>Starting bid</p> 
            <p className="text-green-500 font-medium">$ {auction?.startingPrice}</p> 
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className='text-xs text-gray-800 dark:text-gray-300'>Current bid</p> 
            <p className="text-orange-500 font-medium">$ {auction?.currentBid}</p> 
          </div>
          <button onClick={()=>{loginResponse?navigate(`/view-bid/${auction?._id}`):navigate(`/login`)}} className='bg-primary px-2 py-1 rounded hover:bg-phover'>Place Bid</button>
        </div>
      </div>
    </div>
  )
}

export default Bidcard