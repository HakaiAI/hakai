import React from 'react';

interface SearchSpinnerProps {
  isVisible: boolean;
}

const SearchSpinner: React.FC<SearchSpinnerProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
      <div className='animate-spin w-5 h-5 border-2 border-gray-300 dark:border-gray-600 border-t-blue-500 dark:border-t-blue-400 rounded-full'></div>
    </div>
  );
};

export default SearchSpinner;
