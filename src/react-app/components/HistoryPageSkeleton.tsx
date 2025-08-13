const HistoryPageSkeleton = () => {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='animate-pulse'>
          <div className='h-8 bg-gray-200 rounded w-64 mb-6'></div>
          <div className='h-12 bg-gray-200 rounded mb-6'></div>
          <div className='space-y-4'>
            {[...Array(5)].map((_, i) => (
              <div key={i} className='h-20 bg-gray-200 rounded'></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPageSkeleton;
