import React from 'react';
import PricingCardSkeleton from './PricingCardSkeleton';

const PricingSectionSkeleton: React.FC = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <PricingCardSkeleton />
      <PricingCardSkeleton />
      <PricingCardSkeleton />
    </div>
  );
};

export default PricingSectionSkeleton;
