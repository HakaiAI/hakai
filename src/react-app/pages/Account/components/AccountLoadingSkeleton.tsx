import React from 'react';

const AccountLoadingSkeleton: React.FC = () => {
  return (
    <div className='container mx-auto py-8 space-y-8 px-4 max-w-4xl'>
      <div className='animate-pulse'>
        <div className='space-y-2 mb-8'>
          <div className='h-8 bg-muted rounded w-80'></div>
          <div className='h-5 bg-muted rounded w-96'></div>
        </div>

        {/* Profile Card Skeleton */}
        <div className='bg-card border rounded-xl p-6 mb-8'>
          <div className='h-6 bg-muted rounded w-20 mb-2'></div>
          <div className='h-4 bg-muted rounded w-64 mb-6'></div>

          {/* Avatar and name section */}
          <div className='flex items-center gap-4 mb-6'>
            <div className='h-20 w-20 bg-muted rounded-full'></div>
            <div>
              <div className='h-10 w-32 bg-muted rounded mb-2'></div>
              <div className='h-4 w-40 bg-muted rounded'></div>
            </div>
          </div>

          {/* Form fields */}
          <div className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='h-20 bg-muted rounded'></div>
              <div className='h-20 bg-muted rounded'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='h-20 bg-muted rounded'></div>
              <div className='h-20 bg-muted rounded'></div>
            </div>
            <div className='h-20 bg-muted rounded'></div>
            <div className='h-24 bg-muted rounded'></div>
            <div className='h-10 w-32 bg-muted rounded'></div>
          </div>
        </div>

        {/* Security Card Skeleton */}
        <div className='bg-card border rounded-xl p-6'>
          <div className='h-6 bg-muted rounded w-20 mb-2'></div>
          <div className='h-4 bg-muted rounded w-64 mb-6'></div>

          <div className='space-y-6'>
            <div className='h-20 bg-muted rounded'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='h-20 bg-muted rounded'></div>
              <div className='h-20 bg-muted rounded'></div>
            </div>
            <div className='h-10 w-36 bg-muted rounded'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLoadingSkeleton;
