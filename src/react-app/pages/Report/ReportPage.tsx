import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { BarChart3, DollarSign, Users, TrendingUp } from 'lucide-react';

const ReportPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className='p-8 w-full flex justify-center'>
        <div className='max-w-6xl w-full'>
          <div className='animate-pulse'>
            <div className='h-8 bg-gray-200 rounded w-64 mb-2'></div>
            <div className='h-5 bg-gray-200 rounded w-96 mb-8'></div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='h-32 bg-gray-200 rounded-xl'></div>
              ))}
            </div>

            <div className='h-80 bg-gray-200 rounded-xl'></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='p-8 w-full flex justify-center'>
      <div className='max-w-6xl w-full'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-2'>Reports</h1>
          <p className='text-muted-foreground'>
            Here's a summary of your recent activity and key metrics.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Lead Generation Runs
              </CardTitle>
              <BarChart3 className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>1,287</div>
              <p className='text-xs text-green-500 flex items-center gap-1'>
                <TrendingUp className='h-3 w-3' />
                12% increase this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Credits Consumed
              </CardTitle>
              <DollarSign className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>45,210</div>
              <p className='text-xs text-muted-foreground'>
                Total credits used across all campaigns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Leads Generated
              </CardTitle>
              <Users className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>3,456</div>
              <p className='text-xs text-green-500 flex items-center gap-1'>
                <TrendingUp className='h-3 w-3' />
                257 new leads this week
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>
                    "Tech Innovators"
                  </TableCell>
                  <TableCell>
                    <span className='inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800'>
                      Completed
                    </span>
                  </TableCell>
                  <TableCell>Aug 11, 2025</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    "Healthcare Leaders"
                  </TableCell>
                  <TableCell>
                    <span className='inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800'>
                      Paused
                    </span>
                  </TableCell>
                  <TableCell>Aug 10, 2025</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    "Finance Wizards"
                  </TableCell>
                  <TableCell>
                    <span className='inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800'>
                      Updated
                    </span>
                  </TableCell>
                  <TableCell>Aug 9, 2025</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    "Startup Founders"
                  </TableCell>
                  <TableCell>
                    <span className='inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800'>
                      Initiated
                    </span>
                  </TableCell>
                  <TableCell>Aug 8, 2025</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportPage;
