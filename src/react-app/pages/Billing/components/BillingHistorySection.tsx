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
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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
    <Card>
      <CardHeader>
        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
          <div>
            <CardTitle>Billing History</CardTitle>
          </div>
          
          <div className='flex flex-col sm:flex-row gap-2 w-full sm:w-auto'>
            <div className='relative flex-1 sm:flex-initial'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4' />
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
      </CardHeader>

      <CardContent>
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
                        className={`w-2 h-2 rounded-full ${
                          record.status === 'Success'
                            ? 'bg-green-500'
                            : 'bg-orange-500'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          record.status === 'Success'
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-orange-600 dark:text-orange-400'
                        }`}
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
          <div className='text-center py-8 text-muted-foreground'>
            No billing records found matching your search.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BillingHistorySection;
