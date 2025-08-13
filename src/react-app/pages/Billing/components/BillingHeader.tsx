import React from 'react';
import { Button } from '@/components/ui/button';

interface BillingHeaderProps {
  billingPeriod: 'monthly' | 'yearly';
  onBillingPeriodChange: (period: 'monthly' | 'yearly') => void;
}

const BillingHeader: React.FC<BillingHeaderProps> = ({
  billingPeriod,
  onBillingPeriodChange,
}) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900'>
          Billing &amp; Subscription
        </h1>
        <p className='text-gray-600 mt-2'>
          Keep track of your subscription details, update your billing
          information, and control your account's payment
        </p>
      </div>

      {/* Period Toggle */}
      <div className='flex rounded-lg border border-gray-200 bg-white p-1'>
        <Button
          variant={billingPeriod === 'monthly' ? 'default' : 'ghost'}
          size='sm'
          onClick={() => onBillingPeriodChange('monthly')}
          className='px-4'
        >
          Monthly
        </Button>
        <Button
          variant={billingPeriod === 'yearly' ? 'default' : 'ghost'}
          size='sm'
          onClick={() => onBillingPeriodChange('yearly')}
          className='px-4'
        >
          Yearly
        </Button>
      </div>
    </div>
  );
};

export default BillingHeader;
