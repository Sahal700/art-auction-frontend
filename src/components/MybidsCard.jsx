import React, { useState } from 'react'
import { serverUrl } from '../services/serverUrl'
import { updateBIdApi } from '../services/allApi'
import { toast } from 'react-toastify'

function MybidsCard({auction,setUpdateRes}) {
  const [isValid,setIsValid] = useState("valid")
  const [bidAmount,setBidAmount] = useState('')
  const validate = (e)=>{
    setBidAmount(e.target.value)
    if (!e.target.value.match('^[0-9]*$')) {
      setIsValid("invalid")
    } else{
      if (e.target.value>=auction?.startingPrice && e.target.value>auction?.currentBid) {
        setIsValid("high")
      }else{
        setIsValid("low")
      }
    }
  }
  const updateBid = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      const result = await updateBIdApi(auction._id,{amount:bidAmount},reqHeader)
      // console.log(result);
      if(result.status==201){
        toast.success("Bid updated successfully")
      }else if(result.status == 406 || result.status == 408 ){
        toast.info("Bid Is Low")
      }else if(result.status == 407){
        toast.info("auction is completed")
      }else{
        toast.error("something went wrong")
      }
      setUpdateRes(result)
    }
  }
  return (
    <div className='grid md:grid-cols-3 gap-4 md:mb-6 mb-4 md:mx-20 border-2 dark:border-neutral-600 pb-6 bg-white dark:bg-neutral-800 rounded-lg pt-5'>
        <div className='md:pe-5 md:ps-5'>
          <img src={`${serverUrl}/upload/${auction?.image}`} alt="no image" className='w-full h-[280px] rounded' />
        </div>
        <div className='pe-5'>
          <h2 className='text-lg font-medium'>{auction?.title}</h2>
          <p className='text-[16px]'>{auction?.description}</p>
          <p className='mt-1'>Height : {auction?.height}cm</p>
          <p className='mt-1'>width : {auction?.width}cm</p>
          <p className='mt-1 font-medium'>Current Bid :<span className='text-green-500'> ${auction?.currentBid}</span></p>
          <div className='flex items-center mt-3'>
            <input onChange={(e)=>{validate(e)}} type="text" placeholder="Enter new amount" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-2'/>
            <button disabled={isValid=='high'?false:true} onClick={updateBid} className='bg-primary px-2 py-2 rounded min-w-fit hover:bg-phover'>Out Bid</button>
          </div>
          <div>
              {isValid=='invalid'&& <span className='text-red-500'>Invalid Input</span>}
              {isValid=='low' && <span className='text-red-500'>Bid is Low</span>}
          </div>
        </div>
        <div className='pe-5'>
          <h2 className='text-xl text-center font-medium mb-2'>Bidders</h2>
          {auction?.bids.map((bid)=><div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' />
            <p className='text-lg'>{bid.bidderId.username}</p>
            <p className='text-green-500 font-medium ms-auto'>${bid.amount}</p>
          </div>)}
        </div>
        
      </div>
  )
}

export default MybidsCard