import React, { useEffect, useState } from 'react'
import Bidcard from '../components/Bidcard'
import { getFavouriteApi } from '../services/allApi';
import Header from '../components/Header'

function Favorite() {
    const [favourite,setFavourite] = useState([])
    const [deleteResponse,setDeleteResponse] = useState({})
    // console.log(favourite);
    
    const getFavourite = async() =>{
      if(sessionStorage.getItem("token")){
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
        const result = await getFavouriteApi(reqHeader)
        // console.log(result);
        if (result.status==200) {
          setFavourite(result.data.auctions)
        } else if(result.status==406){
          setFavourite([])
        }
      }
    }
    useEffect(()=>{
      getFavourite()
    },[deleteResponse])
  return (
    <>
      <Header/>
     <div className=' md:pt-[120px] pt-[100px]'> 
        {favourite?.length>0 ?
        <div className='md:grid grid-cols-[repeat(1,1fr_1fr_1fr_1fr)] gap-x-10 gap-y-5 md:px-20 px-5 dark:bg-neutral-800  dark:text-white pb-5'>
             {favourite?.map((item)=>(<div className='mt-3 md:mt-0 rounded-md'><Bidcard favourite={true} auction={item} setDeleteResponse={setDeleteResponse}/></div>))}
        </div>
        :<h1 className='mb-9 text-2xl md:ms-10 text-center md:text-left font-medium'>No favourites Added Yet.......</h1>} {/* need modify */}
     </div>
    </>
  )
}

export default Favorite