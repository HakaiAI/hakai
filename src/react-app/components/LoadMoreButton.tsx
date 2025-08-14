import React from 'react';
import { Button } from '@/components/ui/button';

interface LoadMoreButtonProps {
  onLoadMore: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onLoadMore,
  isLoading,
  disabled = false,
}) => {
  return (
    <div className='mt-8 text-center'>
      <Button
        onClick={onLoadMore}
        disabled={disabled || isLoading}
        variant='outline'
        size='lg'
      >
        {isLoading ? (
          <>
            <div className='animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2'></div>
            Loading...
          </>
        ) : (
          'Load more'
        )}
      </Button>
    </div>
  );
};

export default LoadMoreButton;
