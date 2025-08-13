import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Search, Filter, Download, Eye } from 'lucide-react';

export interface BillingRecord {
  id: string;
  planName: string;
  amount: string;
  purchaseDate: string;
  endDate: string;
  status: 'Processing' | 'Success';
}

interface BillingHistorySectionProps {
  filteredData: BillingRecord[];
  searchTerm: string;
  onSearch: (value: string) => void;
  onExport: () => void;
}

const BillingHistorySection: React.FC<BillingHistorySectionProps> = ({
  filteredData,
  searchTerm,
  onSearch,
  onExport,
}) => {
  return (
    <div className='bg-white rounded-lg border'>
      <div className='p-6 border-b'>
        <h2 className='text-xl font-semibold mb-4'>Billing History</h2>

        {/* Search and Filter Controls */}
        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
          <div className='relative flex-1 max-w-md'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
            <Input
              placeholder='Search...'
              value={searchTerm}
              onChange={e => onSearch(e.target.value)}
              className='pl-10'
            />
          </div>

          <div className='flex gap-2'>
            <Button variant='outline' size='sm'>
              <Filter className='w-4 h-4 mr-2' />
              Filter
            </Button>
            <Button variant='outline' size='sm' onClick={onExport}>
              <Download className='w-4 h-4 mr-2' />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Billing History Table */}
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Plan Name</TableHead>
              <TableHead>Amounts</TableHead>
              <TableHead>Purchase Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map(record => (
              <TableRow key={record.id}>
                <TableCell className='font-medium'>{record.planName}</TableCell>
                <TableCell>{record.amount}</TableCell>
                <TableCell>{record.purchaseDate}</TableCell>
                <TableCell>{record.endDate}</TableCell>
                <TableCell>
                  <div className='flex items-center gap-2'>
                    <div
                      className={cn(
                        'w-2 h-2 rounded-full',
                        record.status === 'Success'
                          ? 'bg-green-500'
                          : 'bg-orange-500'
                      )}
                    />
                    <span
                      className={cn(
                        'text-sm',
                        record.status === 'Success'
                          ? 'text-green-600'
                          : 'text-orange-600'
                      )}
                    >
                      {record.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-2'>
                    <Button variant='ghost' size='sm' className='p-1 h-8 w-8'>
                      <Download className='w-4 h-4' />
                    </Button>
                    <Button variant='ghost' size='sm' className='p-1 h-8 w-8'>
                      <Eye className='w-4 h-4' />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredData.length === 0 && (
        <div className='text-center py-8 text-gray-500'>
          No billing records found matching your search.
        </div>
      )}
    </div>
  );
};

export default BillingHistorySection;
