import React from 'react';
import BillingHeaderSkeleton from './BillingHeaderSkeleton';
import PricingSectionSkeleton from './PricingSectionSkeleton';
import PaymentMethodsSkeleton from './PaymentMethodsSkeleton';
import BillingHistorySkeleton from './BillingHistorySkeleton';

const BillingPageSkeleton: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto space-y-8'>
        <BillingHeaderSkeleton />
        <PricingSectionSkeleton />
        <PaymentMethodsSkeleton />
        <BillingHistorySkeleton />
      </div>
    </div>
  );
};

export default BillingPageSkeleton;
