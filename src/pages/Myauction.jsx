import React, { useContext, useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Addauction from '../components/Addauction';
import EditAuction from '../components/EditAuction';
import { removeAuctionApi, userAuctionApi } from '../services/allApi';
import { addResponseContext, editResponseContext } from '../context/Contextshare';
import { serverUrl } from '../services/serverUrl';
import { toast } from 'react-toastify';
import Header from '../components/Header'

function Myauction() {
  const [userAuction,setUserAuction] = useState([])
  const [removeStatus,setRemoveStatas]=useState({})
  const {addResponse} = useContext(addResponseContext)
  const {editResponse} = useContext(editResponseContext)


  // console.log(userAuction);
  

  const getUserAuction = async()=>{
    if(sessionStorage.getItem("token")){
      const token =sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      // console.log(reqHeader);
      
      const result = await userAuctionApi(reqHeader)
      // console.log(result);
      setUserAuction(result.data)
      
    }
  }

  const handleDelete = async(id)=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      // console.log(reqHeader);
      
      const result = await removeAuctionApi(id,reqHeader)
      // console.log(result);
      if (result.status==200) {
        setRemoveStatas(result)
      }else{
        toast.error("someting went wrong")
      }
      
    }
  }

  useEffect(()=>{
    getUserAuction()
  },[addResponse,editResponse,removeStatus])
  return (
    <>
      <Header/>
      <div className='dark:bg-neutral-800 dark:text-white pt-[100px] pb-10'>
        <h1 className='text-center text-2xl font-semibold mb-5 md:mb-0'>My Auctions</h1>
        <div className='md:mx-20 mx-2 mb-2 flex'>
          <Addauction/>
        </div>
        {/* table */}
        {userAuction.length > 0 ? <div className='md:mx-20 mx-2 relative overflow-x-auto shadow-md rounded-md'>
          <table className='w-full'>
            <thead className='bg-neutral-300 dark:bg-neutral-700'>
              <tr>
                <th className='py-4 text-left px-3'>Title</th>
                <th className='py-4 text-left px-3'>Image</th>
                <th className='py-4 text-left px-3'>Starting Bid</th>
                <th className='py-4 text-left px-3'>Current Bid</th>
                <th className='py-4 text-left px-3'>End Time</th>
                <th className='py-4 text-left px-3'>Status</th>
                <th className='py-4 text-left px-3'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-neutral-100 dark:bg-neutral-600'>
              { userAuction?.map((item)=>(
                <tr className='border-neutral-200 dark:border-neutral-800 border-b-2'>
                <td className='px-3 py-1 font-medium'>{item?.title}</td>
                <td className='px-3 py-1'><img src={`${serverUrl}/upload/${item?.image}`} alt="" className='h-[60px] w-[60px] rounded'/></td>
                <td className='px-3 py-1'>${item?.startingPrice}</td>
                <td className='px-3 py-1'>${item?.currentBid}</td>
                <td className='px-3 py-1'>{new Intl.DateTimeFormat("en-Gb").format(new Date(item?.endTime))}</td>
                <td className='px-3 py-1'>
                  {item?.status == 'active' &&
                    <span className='px-2 rounded text-white bg-blue-500 font-medium dark:text-black'>active</span>
                  }
                  {item?.status == 'pending' &&
                    <span className='px-2 rounded text-white bg-yellow-500 font-medium dark:text-black'>pending</span>
                  }
                </td>
                <td className='px-3 md:pe-10 py-1'><div className='flex justify-between md:space-x-0 space-x-3 text-xl'><Link to={`/view-auction/${item?._id}`}><FaEye className='text-blue-500'/></Link><EditAuction auction={item} userAuction={userAuction}/><FaTrashAlt onClick={()=>{handleDelete(item?._id)}} className='text-red-500'/></div></td>
              </tr>
              ))
              }
            </tbody>
          </table> 
        </div>
        :
        <h1 className='text-center text-3xl'>No Auctions Added Yet....</h1>}
      </div>
    </>
   
  )
}

export default Myauction
