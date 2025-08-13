import React from 'react';

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
      <button
        onClick={onLoadMore}
        disabled={disabled || isLoading}
        className='inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
      >
        {isLoading ? (
          <>
            <div className='animate-spin w-4 h-4 border-2 border-gray-300 border-t-gray-700 rounded-full mr-2'></div>
            Loading...
          </>
        ) : (
          'Load more'
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton;
