import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaUserTie } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ViewProfile({setEditProfile}) {
  const navigate = useNavigate()
  return ( 
    <div className="p-6 bg-gradient-to-r from-orange-50 dark:from-neutral-700 to-yellow-100 dark:to-neutral-700  dark:text-white shadow-lg  rounded-xl">
      <div className="flex justify-center mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s"
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-md border-2 border-orange-200"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <FaUser className="text-orange-500 mr-2" />
          <p><strong>Name:</strong> John Doe</p>
        </div>
        <div className="flex items-center">
          <FaUserTie className="text-orange-500 mr-2" />
          <p><strong>Role:</strong> Bidder</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-orange-500 mr-2" />
          <p><strong>Email:</strong> random@gmail.com</p>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-orange-500 mr-2" />
          <p><strong>Phone:</strong> 937483897</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-orange-500 mr-2" />
          <p><strong>Address:</strong> kakkand, Ernamkulam</p>
        </div>
      </div>

      <div className="mt-6 flex justify-around">
        <button onClick={()=>{setEditProfile(true)}} className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
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
