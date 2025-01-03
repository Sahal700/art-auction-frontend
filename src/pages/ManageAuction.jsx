import React, { useEffect, useState } from 'react'
import { getAllAdminAuctionApi, updateAuctionStatus } from '../services/allApi'
import { serverUrl } from '../services/serverUrl'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { toast } from 'react-toastify'

function ManageAuction() {
  const [allAuction,setAllAuction] = useState([])
  const [token,setToken] = useState("")
  const [statusUpdateRes,setStatusUpdateRes]=useState({})
  // console.log(allAuction);
  
    const getAllUsers = async()=>{
      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
        const result = await getAllAdminAuctionApi(reqHeader)
        setAllAuction(result.data)
      }
    }
    const handleStatus = async(id,status)=>{
      if (token) {
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
        const result = await updateAuctionStatus(id,status,reqHeader)
        if (result.status==200) {
          setStatusUpdateRes(result)
        }else{
          toast.error("something went wrong")
        }
      }
    }
    useEffect(()=>{
      getAllUsers()
    },[statusUpdateRes])
    useEffect(()=>{
      if (sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
      }
    },[])
  return (
    <div className='dark:bg-neutral-800 dark:text-white pb-10'>
        <h1 className='text-center text-2xl font-semibold mt-10 md:mb-0'>Auctions</h1>
        {/* table */}
        {allAuction.length > 0 ? <div className='md:mx-20 mx-2 mt-5 relative overflow-x-auto shadow-md rounded-md'>
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
              { allAuction?.map((item)=>(
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
                  {item?.status == 'rejected' &&
                    <span className='px-2 rounded text-white bg-red-500 font-medium dark:text-black'>rejected</span>
                  }
                  {item?.status == 'completed' &&
                    <span className='px-2 rounded text-white bg-green-500 font-medium dark:text-black'>completed</span>
                  }
                  {item?.status == 'pending' &&
                    <div className='flex'>
                      <button className='rounded bg-green-500 text-white px-2' onClick={()=>{handleStatus(item?._id,"active")}}>Accept</button>
                      <button className='rounded bg-red-500 text-white px-2 ms-1' onClick={()=>{handleStatus(item?._id,"rejected")}}>Reject</button>
                    </div>
                  }
                </td>
                <td className='px-3 md:pe-10 py-1'>
                  <div className='flex justify-between md:space-x-0 space-x-3'>
                    <Link to={`/view-auction/admin/${item?._id}`}>
                      <button className='flex items-center text-blue-500'>
                        <FaEye className='text-blue-500 me-1 text-xl'/>view
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              ))
              }
            </tbody>
          </table> 
        </div>
        :
        <h1 className='text-center text-3xl'>No Auctions Available</h1>}
      </div>
  )
}

export default ManageAuction