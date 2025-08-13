import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const PricingCardSkeleton: React.FC = () => {
  return (
    <Card className='relative flex-1 min-w-[300px] animate-pulse'>
      <CardHeader>
        <div className='space-y-3'>
          <div className='h-6 bg-gray-200 rounded w-16'></div>
          <div className='h-6 bg-gray-200 rounded w-32'></div>
          <div className='h-8 bg-gray-200 rounded w-40'></div>
        </div>
      </CardHeader>
      <CardContent className='flex-1'>
        <div className='space-y-3'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='flex items-start gap-2'>
              <div className='w-5 h-5 bg-gray-200 rounded-full mt-0.5'></div>
              <div className='h-4 bg-gray-200 rounded flex-1'></div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className='h-10 bg-gray-200 rounded w-full'></div>
      </CardFooter>
    </Card>
  );
};

export default PricingCardSkeleton;
