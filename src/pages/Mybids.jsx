import React from 'react'

function Mybids() {
  return (
    <div className='pt-[100px] dark:bg-neutral-800 dark:text-white px-4'>
      <div className='grid md:grid-cols-3 gap-4 md:mb-6 mb-4 md:mx-20 border-2 dark:border-neutral-600 pb-6 bg-white dark:bg-neutral-800 rounded-lg pt-5'>
        <div className='md:pe-5 md:ps-5'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSrnMXZhKNBCATeHB-NQive9gjt6R2_eDOQ&s" alt="no image" className='w-full h-[280px] rounded' />
        </div>
        <div className='pe-5'>
          <h2 className='text-lg font-medium'>title</h2>
          <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis perspiciatis enim repellendus laudantium eaque adipisci blanditiis eligendi, distinctio, ab odit dolore at explicabo esse, soluta aliquid saepe nostrum veritatis fugiat!</p>
          <p className='mt-1'>Height : 120cm</p>
          <p className='mt-1'>width : 120cm</p>
          <p className='mt-1 font-medium'>Current Bid :<span className='text-green-500'> $400</span></p>
          <div className='flex items-center mt-3'>
            <input type="text" placeholder="Enter new amount" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-2'/>
            <button className='bg-primary px-2 py-2 rounded min-w-fit hover:bg-phover'>Out Bid</button>
          </div>
        </div>
        <div className='pe-5'>
          <h2 className='text-xl text-center font-medium mb-2'>Bidders</h2>
          <div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' /><p className='text-lg'>name1</p><p className='text-green-500 font-medium ms-auto'>$40</p></div>
          <div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' /><p className='text-lg'>name1</p><p className='text-green-500 font-medium ms-auto'>$40</p></div>
          <div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' /><p className='text-lg'>name1</p><p className='text-green-500 font-medium ms-auto'>$40</p></div>
        </div>
      </div>
      <div className='grid md:grid-cols-3 gap-4 md:mb-6 mb-4 md:mx-20 border-2 dark:border-neutral-600 pb-6 bg-white dark:bg-neutral-800 rounded-lg pt-5'>
        <div className='md:pe-5 md:ps-5'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSrnMXZhKNBCATeHB-NQive9gjt6R2_eDOQ&s" alt="no image" className='w-full h-[280px] rounded' />
        </div>
        <div className='pe-5'>
        <h2 className='text-lg font-medium'>title</h2>
        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis perspiciatis enim repellendus laudantium eaque adipisci blanditiis eligendi, distinctio, ab odit dolore at explicabo esse, soluta aliquid saepe nostrum veritatis fugiat!</p>
        <p className='mt-1'>Height : 120cm</p>
        <p className='mt-1'>width : 120cm</p>
        <p className='mt-1 font-medium'>Current Bid :<span className='text-green-500'> $400</span></p>
        <button className='bg-primary px-2 py-1 mt-1 rounded hover:bg-phover'>Out Bid</button>
        </div>
        <div className='pe-5'>
          <h2 className='text-xl text-center font-medium mb-2'>Bidders</h2>
          <div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' /><p className='text-lg'>name1</p><p className='text-green-500 font-medium ms-auto'>$40</p></div>
          <div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' /><p className='text-lg'>name1</p><p className='text-green-500 font-medium ms-auto'>$40</p></div>
          <div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' /><p className='text-lg'>name1</p><p className='text-green-500 font-medium ms-auto'>$40</p></div>
        </div>
      </div>
      <div className='grid md:grid-cols-3 gap-4 md:mb-6 mb-4 md:mx-20 border-2 dark:border-neutral-600 pb-6 bg-white dark:bg-neutral-800 rounded-lg pt-5'>
        <div className='md:pe-5 md:ps-5'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSrnMXZhKNBCATeHB-NQive9gjt6R2_eDOQ&s" alt="no image" className='w-full h-[280px] rounded' />
        </div>
        <div className='pe-5'>
        <h2 className='text-lg font-medium'>title</h2>
        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis perspiciatis enim repellendus laudantium eaque adipisci blanditiis eligendi, distinctio, ab odit dolore at explicabo esse, soluta aliquid saepe nostrum veritatis fugiat!</p>
        <p className='mt-1'>Height : 120cm</p>
        <p className='mt-1'>width : 120cm</p>
        <p className='mt-1 font-medium'>Current Bid :<span className='text-green-500'> $400</span></p>
        <button className='bg-primary px-2 py-1 mt-1 rounded hover:bg-phover'>Out Bid</button>
        </div>
        <div className='pe-5'>
          <h2 className='text-xl text-center font-medium mb-2'>Bidders</h2>
          <div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' /><p className='text-lg'>name1</p><p className='text-green-500 font-medium ms-auto'>$40</p></div>
          <div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' /><p className='text-lg'>name1</p><p className='text-green-500 font-medium ms-auto'>$40</p></div>
          <div className='flex items-center p-3 border-2 rounded-md mb-2 bg-gray-50 dark:bg-neutral-700 shadow-sm hover:shadow-md transition-shadow duration-200'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[45px] h-[45px] rounded-full border-2 border-gray-300 dark:border-neutral-500 me-2 transition-transform transform hover:scale-110 duration-200' /><p className='text-lg'>name1</p><p className='text-green-500 font-medium ms-auto'>$40</p></div>
        </div>
      </div>
    </div>
  )
}

export default Mybids