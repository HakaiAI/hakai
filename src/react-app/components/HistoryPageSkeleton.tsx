import { Skeleton } from '@/components/ui/skeleton';

const HistoryPageSkeleton = () => {
  return (
    <div className='min-h-screen bg-background p-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='space-y-6'>
          <Skeleton className='h-8 w-64' />
          <Skeleton className='h-12' />
          <div className='space-y-3'>
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className='h-20' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPageSkeleton;
