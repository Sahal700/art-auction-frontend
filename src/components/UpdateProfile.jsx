
import { FaEdit } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

function UpdateProfile({setEditProfile}) {

  return (
    <div className="bg-neutral-100 p-6 rounded-xl shadow-lg dark:bg-neutral-700 dark:text-white relative">
      <button onClick={()=>{setEditProfile(false)}} className='absolute text-2xl cursor-pointer'><IoMdArrowRoundBack/></button>
      <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>
      <div className='flex justify-center'>
        <div className='relative'>
          <label htmlFor="profileImg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-28 h-28 rounded-[50%] border-2 border-primary' />
            <div className='bg-primary p-1 rounded-[50%] absolute bottom-3 right-0'><FaEdit/></div>
          </label>
          <input id='profileImg' type="file" className='hidden' />
        </div>
      </div>
      <div className='space-y-4'>
        <div>
              <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
        </div>
        <div>
              <label htmlFor="Phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
              <input type="text" id="Phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required />
        </div>
        <div>
              <label htmlFor="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
              <textarea name="" id="address" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></textarea>
              
        </div>
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Update
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </div> 
    </div>
  );
}

export default UpdateProfile;
