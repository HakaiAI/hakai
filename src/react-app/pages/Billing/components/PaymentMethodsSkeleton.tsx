import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PaymentMethodsSkeleton: React.FC = () => {
  return (
    <div className='bg-white rounded-lg border animate-pulse'>
      <div className='p-6 border-b'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='h-6 bg-gray-200 rounded w-40 mb-2'></div>
            <div className='h-4 bg-gray-200 rounded w-64'></div>
          </div>
          <div className='h-10 w-48 bg-gray-200 rounded'></div>
        </div>
      </div>

      <div className='p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[...Array(2)].map((_, index) => (
            <Card key={index} className='relative'>
              <CardContent className='p-4'>
                <div className='flex items-start justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-gray-200 rounded'></div>
                    <div className='space-y-2'>
                      <div className='h-4 bg-gray-200 rounded w-20'></div>
                      <div className='h-3 bg-gray-200 rounded w-32'></div>
                      <div className='h-3 bg-gray-200 rounded w-24'></div>
                      <div className='h-3 bg-gray-200 rounded w-20'></div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='h-8 w-20 bg-gray-200 rounded'></div>
                    <div className='h-8 w-8 bg-gray-200 rounded'></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsSkeleton;
