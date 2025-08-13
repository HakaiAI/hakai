import React from 'react';

const BillingHeaderSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-pulse'>
      <div>
        <div className='h-8 bg-gray-200 rounded w-80 mb-2'></div>
        <div className='h-5 bg-gray-200 rounded w-96'></div>
      </div>
      <div className='h-10 w-40 bg-gray-200 rounded'></div>
    </div>
  );
};

export default BillingHeaderSkeleton;
