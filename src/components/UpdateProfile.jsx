
import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { serverUrl } from "../services/serverUrl";
import { toast } from "react-toastify";
import { updateProfileApi } from "../services/allApi";
import { updateProfileResponseContext } from "../context/Contextshare";

function UpdateProfile({setEditProfile}) {
  const [userDetails, setUserDetails] = useState({})
  const [preview, setPreview] = useState("")
  const [key, setKey] = useState(true)
  const [token,setToken] = useState("")
  const {setUpdateProfileResponse} = useContext(updateProfileResponseContext)

  // console.log(preview)

  const handleFile=(e)=>{
    setUserDetails({...userDetails, profile:e.target.files[0]})
    // console.log(e.target.files[0]);
  }
  const handleCancel=()=>{
    setUserDetails(JSON.parse(sessionStorage.getItem("existingUser")))
    setKey(!key)
    setPreview("")
  }
  const updateProfile=async()=>{
    const{username,phone,address,profile}=userDetails
    if(!username){
      toast.info("please enter the name")
    }else{
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("phone",phone)
      reqBody.append("address",address)
      reqBody.append("profile",profile)
      if (preview) {
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }
        const result = await updateProfileApi(reqBody,reqHeader)
        // console.log(result);
        if (result.status==200) {
          toast.success("updated successfully")
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          setUpdateProfileResponse(result)
        }
      }else{
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
        const result = await updateProfileApi(reqBody,reqHeader)
        // console.log(result);
        if (result.status==200) {
          toast.success("updated successfully")
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          setUpdateProfileResponse(result)
        }
      }
    }
  }
  useEffect(()=>{
    if (sessionStorage.getItem("existingUser")) {
      setUserDetails(JSON.parse(sessionStorage.getItem("existingUser")))
    }
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])
  useEffect(()=>{
    if (userDetails.profile && typeof userDetails.profile !== "string") {
      setPreview(URL.createObjectURL(userDetails.profile))
    }
  },[userDetails.profile])
  return (
    <div className="bg-neutral-100 p-6 rounded-xl shadow-lg dark:bg-neutral-700 dark:text-white relative">
      <button onClick={()=>{setEditProfile(false)}} className='absolute text-2xl cursor-pointer'><IoMdArrowRoundBack/></button>
      <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>
      <div className='flex justify-center'>
        <div className='relative'>
          <label htmlFor="profileImg">
            {userDetails?.profile==""?<img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="" className='w-28 h-28 rounded-[50%] border-2 border-primary' />:
            <img src={preview?preview:`${serverUrl}/upload/${userDetails.profile}`} alt="" className='w-28 h-28 rounded-[50%] border-2 border-primary' />}
            <div className='bg-primary p-1 rounded-[50%] absolute bottom-3 right-0'><FaEdit/></div>
          </label>
          <input id='profileImg' type="file" className='hidden' key={key} onChange={(e)=>{handleFile(e)}} />
        </div>
      </div>
      <div className='space-y-4'>
        <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text"  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required value={userDetails?.username} onChange={(e)=>setUserDetails({...userDetails , username:e.target.value})}/>
        </div>
        <div>
              <label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
              <input type="text" id="Phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required value={userDetails?.phone } onChange={(e)=>setUserDetails({...userDetails , phone:e.target.value})}/>
        </div>
        <div>
              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
              <textarea name="" id="address" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={userDetails?.address}onChange={(e)=>setUserDetails({...userDetails , address:e.target.value})}></textarea>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={updateProfile}
            className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Update
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div> 
    </div>
  );
}

export default UpdateProfile;
