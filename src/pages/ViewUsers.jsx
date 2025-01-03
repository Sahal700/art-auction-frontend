import React, { useEffect, useState } from 'react'
import { getAllUsersApi } from '../services/allApi'
import { serverUrl } from '../services/serverUrl'

function ViewUsers() {
  const [allUsers,setAllUsers] = useState([])
  const getAllUsers = async()=>{
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      const result = await getAllUsersApi(reqHeader)
      setAllUsers(result.data)
    }
  }
  useEffect(()=>{
    getAllUsers()
  },[])
  return (
    <div className='dark:bg-neutral-800 dark:text-white pb-10'>
        <h1 className='text-center text-2xl font-semibold mt-10 md:mb-0'>Users</h1>
        {/* table */}
        {allUsers.length > 0 ? <div className='md:mx-20 mx-2 mt-5 relative overflow-x-auto shadow-md rounded-md'>
          <table className='w-full'>
            <thead className='bg-neutral-300 dark:bg-neutral-700'>
              <tr>
                <th className='py-4 text-left px-3'>Name</th>
                <th className='py-4 text-left px-3'>Email</th>
                <th className='py-4 text-left px-3'>Phone</th>
                <th className='py-4 text-left px-3'>Adress</th>
              </tr>
            </thead>
            <tbody className='bg-neutral-100 dark:bg-neutral-600'>
              { allUsers?.map((item)=>(
                <tr className='border-neutral-200 dark:border-neutral-800 border-b-2'>
                <td className='px-3 py-1 font-medium'><div className='flex items-center'><img src={item?.profile?`${serverUrl}/upload/${item?.profile}`:`https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png`} alt="" className='h-[60px] w-[60px] me-2 rounded-[50%]'/>{item?.username}</div></td>
                <td className='px-3 py-1'>{item?.email}</td>
                <td className='px-3 py-1'>{item?.phone || "N/A"}</td>
                <td className='px-3 py-1'>{item?.address || "N/A"}</td>
              </tr>
              ))
              }
            </tbody>
          </table> 
        </div>
        :
        <h1 className='text-center text-3xl'>No Users ....</h1>}
      </div>
  )
}

export default ViewUsers