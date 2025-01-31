import React, { useContext, useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaUserTie } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { updateProfileResponseContext } from '../context/Contextshare';
import { serverUrl } from '../services/serverUrl';
import { IoWallet } from 'react-icons/io5';

function ViewProfile({setEditProfile,setwallet}) {
  const [userDetails, setUserDetails] = useState({})
  const navigate = useNavigate()
  const {updateProfileResponse} = useContext(updateProfileResponseContext)

  // console.log(userDetails)

  useEffect(()=>{
    if (sessionStorage.getItem("existingUser")) {
      setUserDetails(JSON.parse(sessionStorage.getItem("existingUser")))
    }
  },[updateProfileResponse])
  return ( 
    <div className="p-6 bg-gradient-to-r from-orange-50 dark:from-neutral-700 to-yellow-100 dark:to-neutral-700  dark:text-white shadow-lg  rounded-xl">
      <div className="flex justify-center mb-6">
        <img
          src={userDetails.profile?`${serverUrl}/upload/${userDetails.profile}`:"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-md border-2 border-orange-200"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <FaUser className="text-orange-500 mr-2" />
          <p><strong>Name:</strong> {userDetails?.username}</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-orange-500 mr-2" />
          <p><strong>Email:</strong> {userDetails?.email}</p>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-orange-500 mr-2" />
          <p><strong>Phone:</strong> {userDetails?.phone || "N/A"}</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-orange-500 mr-2" />
          <p><strong>Address:</strong> {userDetails?.address || "N/A"}</p>
        </div>
        <div onClick={()=>{setwallet(true);setEditProfile(false);}} className="flex items-center p-5 dark:bg-neutral-600 bg-gradient-to-r from-orange-100 to-yellow-200 hover:from-[#fde2bf] hover: hover:to-[#fded72] rounded-md dark:hover:bg-[rgb(96,96,96)] shadow transition-colors">
          <IoWallet className='text-orange-500 mr-2'/><span className='text-lg'>wallet</span>
          <span className='text-green-500 ms-auto text-lg font-medium'>₹100</span>
        </div>
      </div>

      <div className="mt-6 flex justify-around">
        <button onClick={()=>{setEditProfile(true);setwallet(false);}} className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          Edit Profile
        </button>
        <button onClick={()=>{navigate('/login')}} className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </div>
  );
}

export default ViewProfile;
