import React, { useEffect, useState } from 'react'
import { getAllBidsApi } from '../services/allApi';
import MybidsCard from '../components/MybidsCard';
import Header from '../components/Header'

function Mybids() {
  const [allBids,setAllBids] = useState([])
  const [updateRes,setUpdateRes] = useState({})
  
  // console.log(allBids);
  

  const getAllBids = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      const result = await getAllBidsApi(reqHeader)
      // console.log(result.data);
      if (result.status==200) {
        result.data.auctions.forEach((item)=>item.bids.sort((a,b) => b.amount-a.amount).splice(3))
        setAllBids(result.data.auctions)
      }
      
    }
  }
  
  useEffect(()=>{
    getAllBids()
  },[updateRes])
  return (
    <>
      <Header/>
      <div className='pt-[100px] dark:bg-neutral-800 dark:text-white px-4 pb-5'>
        {allBids?.length>0 && allBids?.map((item)=><MybidsCard auction={item} setUpdateRes={setUpdateRes}/>)}  
      </div>
    </>
  )
}

export default Mybids