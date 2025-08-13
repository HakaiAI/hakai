import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

const BillingHistorySkeleton: React.FC = () => {
  return (
    <div className='bg-white rounded-lg border animate-pulse'>
      <div className='p-6 border-b'>
        <div className='h-6 bg-gray-200 rounded w-32 mb-4'></div>

        {/* Search and Filter Controls */}
        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
          <div className='relative flex-1 max-w-md'>
            <div className='h-10 bg-gray-200 rounded'></div>
          </div>

          <div className='flex gap-2'>
            <div className='h-8 w-16 bg-gray-200 rounded'></div>
            <div className='h-8 w-20 bg-gray-200 rounded'></div>
          </div>
        </div>
      </div>

      {/* Billing History Table */}
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className='h-4 bg-gray-200 rounded w-20'></div>
              </TableHead>
              <TableHead>
                <div className='h-4 bg-gray-200 rounded w-16'></div>
              </TableHead>
              <TableHead>
                <div className='h-4 bg-gray-200 rounded w-24'></div>
              </TableHead>
              <TableHead>
                <div className='h-4 bg-gray-200 rounded w-16'></div>
              </TableHead>
              <TableHead>
                <div className='h-4 bg-gray-200 rounded w-12'></div>
              </TableHead>
              <TableHead>
                <div className='h-4 bg-gray-200 rounded w-12'></div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(4)].map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className='h-4 bg-gray-200 rounded w-32'></div>
                </TableCell>
                <TableCell>
                  <div className='h-4 bg-gray-200 rounded w-16'></div>
                </TableCell>
                <TableCell>
                  <div className='h-4 bg-gray-200 rounded w-20'></div>
                </TableCell>
                <TableCell>
                  <div className='h-4 bg-gray-200 rounded w-20'></div>
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-gray-200 rounded-full'></div>
                    <div className='h-4 bg-gray-200 rounded w-16'></div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-2'>
                    <div className='h-8 w-8 bg-gray-200 rounded'></div>
                    <div className='h-8 w-8 bg-gray-200 rounded'></div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BillingHistorySkeleton;
