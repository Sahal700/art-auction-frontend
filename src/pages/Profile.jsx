import React, { useState } from 'react'
import ViewProfile from '../components/ViewProfile'
import UpdateProfile from '../components/UpdateProfile'
import BidHistory from '../components/BidHistory'

function Profile() {
  const [editProile,setEditProfile] = useState(false)
  return (
    <div className='dark:bg-neutral-800 pt-[100px]'>
      <div className='grid grid-cols-[repeat(1,1fr_2fr)] md:mx-40 gap-10'>
        <div><ViewProfile setEditProfile={setEditProfile}/></div>
        {/* <div className='border-2 p-4'>
          <div className='shadow flex flex-col items-center bg-orange-50 rounded'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="no image" className='w-[200px] h-[200px] rounded-[50%] mt-5' />
            <h4 className='text-lg font-medium'>Name </h4>
            <p>random@gmail.com</p>
            <div onClick={()=>{setRender('viewProfile')}} className='w-full mt-3 p-5  bg-orange-100 font-medium border-b-2 border-orange-200'>view Profile</div>
            <div onClick={()=>{setRender('updateProfile')}} className='w-full p-5  bg-orange-100 font-medium border-b-2  border-orange-200'>Update Profile</div>
            <div className='w-full p-5  bg-orange-100 font-medium border-b-2 border-orange-200'>Bid won</div>
            <div onClick={()=>{setRender('bidHistory')}} className='w-full p-5  bg-orange-100 font-medium border-b-2  border-orange-200'>Bid History</div>
            <button onClick={()=>{navigate('/login')}} className='w-full p-5 bg-primary rounded-b font-medium'>Logout</button>

          </div>
        </div> */}
        <div className=''>
          {editProile && <UpdateProfile setEditProfile={setEditProfile}/>}
          {!editProile && <BidHistory/>}
        </div>
      </div>
    </div>
  )
}

export default Profile