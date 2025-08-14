import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const BillingPageSkeleton: React.FC = () => {
  return (
    <div className={cn(
      "min-h-screen p-6",
      "bg-background text-foreground"
    )}>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Billing Header Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-5 w-64" />
        </div>

        {/* Pricing Section Skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-8 w-32" />
          <div className="grid gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="space-y-4 p-6 border rounded-lg">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full mt-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-8 w-48" />
          <div className="space-y-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-10 w-16" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <Skeleton className="h-8 w-20" />
              </div>
            ))}
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        {/* Billing History Skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-8 w-40" />
          <div className="border rounded-lg">
            <div className="divide-y">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPageSkeleton;
