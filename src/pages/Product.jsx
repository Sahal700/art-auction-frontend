import React from 'react'

function Product() {
  return (
    <div className='pt-[100px] grid md:grid-cols-2 md:px-40 dark:bg-neutral-800 dark:text-white'>
        <div className='md:pe-5'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSrnMXZhKNBCATeHB-NQive9gjt6R2_eDOQ&s" alt="" className='w-full'/>
        </div>
        <div className='md:ps-4 ps-3 pe-3'>
          <h1 className='text-2xl font-semibold mt-3 md:mt-0'>Tittle</h1>
          <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A obcaecati non commodi laborum explicabo tempore, dolorem deleniti quibusdam perspiciatis odit ratione doloremque veniam minus iste facilis? Accusantium maiores odit veniam!</p>
          <h4 className='font-medium text-lg mt-5'>Artist :</h4>
          <div className='flex items-center'><span className='hover:text-primary cursor-pointer'>Neel</span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s" alt="" className='w-[40px] h-[40px] rounded-[50%] hover:border-primary hover:border-2 cursor-pointer ms-5' /></div>
          <h4 className='font-medium text-lg mt-5'>Deimentions :</h4>
          <p className=''>height : 130Cm</p>
          <p className=''>width : 130Cm</p>
          <p className='mt-5 font-medium'>Strating Price: <span className='text-green-500 font-normal'>$49</span></p>
          <p className='mt-5 font-medium'>current Bid: <span className='text-red-500 font-normal'>$49</span></p>
          <label for='' className='block mt-5'>Your Bid:</label>
          <div className=''>
            <input type="text" placeholder='Enter your bid amount' className='p-2 bg-transparent border-2 border-black dark:border-white focus:outline-primary rounded' /> 
            <button className='py-[9px] px-3 rounded ms-3 bg-primary'>Place Bid</button>
          </div>
        </div>
    </div>
  )
}

export default Product