import React from 'react';
import { FaHistory, FaRegClock, FaDollarSign } from 'react-icons/fa';

function BidHistory() {
  const bidData = [
    {
      item: "Abstract Painting",
      bidAmount: 45,
      date: "2024-11-10",
      status: "Won",
    },
    {
      item: "Vintage Vase",
      bidAmount: 35,
      date: "2024-11-05",
      status: "Lost",
    },
    {
      item: "Landscape Art",
      bidAmount: 50,
      date: "2024-10-28",
      status: "Pending",
    },
  ];

  return (
    <div className='p-6 bg-gradient-to-r from-orange-50 to-yellow-100 dark:from-neutral-700 dark:to-neutral-700 shadow-lg rounded-xl'>
      <h2 className='text-2xl font-semibold text-neutral-800 dark:text-white mb-6'>
        <FaHistory className='inline mr-2 text-primary' />
        Bid History
      </h2>

      <div className='space-y-4'>
        <div className='flex items-center justify-between p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:bg-orange-100 dark:hover:bg-neutral-600'>
            <div className='flex items-center'>
              <div className='mr-4'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSrnMXZhKNBCATeHB-NQive9gjt6R2_eDOQ&s"
                  alt="item"
                  className='w-16 h-16 rounded-md'
                />
              </div>
              <div>
                <h3 className='font-semibold text-neutral-800 dark:text-white'>Landscape Art</h3>
                <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                  <FaRegClock className='inline mr-1' />
                  2024-10-28
                </p>
              </div>
            </div>
            <div>
              <p className='text-lg font-medium text-green-500'>
                $40
              </p>
              <p
                className='text-sm font-semibold text-green-500'
              >
                Won
              </p>
            </div>
        </div>
        <div className='flex items-center justify-between p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:bg-orange-100 dark:hover:bg-neutral-600'>
            <div className='flex items-center'>
              <div className='mr-4'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSrnMXZhKNBCATeHB-NQive9gjt6R2_eDOQ&s"
                  alt="item"
                  className='w-16 h-16 rounded-md'
                />
              </div>
              <div>
                <h3 className='font-semibold text-neutral-800 dark:text-white'>Landscape Art</h3>
                <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                  <FaRegClock className='inline mr-1' />
                  2024-10-28
                </p>
              </div>
            </div>
            <div>
              <p className='text-lg font-medium text-green-500'>
                $40
              </p>
              <p
                className='text-sm font-semibold text-green-500'
              >
                Won
              </p>
            </div>
        </div>
        <div className='flex items-center justify-between p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:bg-orange-100 dark:hover:bg-neutral-600'>
            <div className='flex items-center'>
              <div className='mr-4'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSrnMXZhKNBCATeHB-NQive9gjt6R2_eDOQ&s"
                  alt="item"
                  className='w-16 h-16 rounded-md'
                />
              </div>
              <div>
                <h3 className='font-semibold text-neutral-800 dark:text-white'>Landscape Art</h3>
                <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                  <FaRegClock className='inline mr-1' />
                  2024-10-28
                </p>
              </div>
            </div>
            <div>
              <p className='text-lg font-medium text-green-500'>
                $40
              </p>
              <p
                className='text-sm font-semibold text-green-500'
              >
                Won
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BidHistory;
