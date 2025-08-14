import { cn } from '@/lib/utils';
import { Link } from 'react-router';
import { mockRecentChats, type RecentChat } from '@/data/mockRecentChats';

interface RecentChatsProps {
  isOpen: boolean;
}

const RecentChats = ({ isOpen }: RecentChatsProps) => {
  if (!isOpen) return null;

  return (
    <div className='flex flex-col flex-1 min-h-0'>
      <div className='px-3 py-2 flex-shrink-0'>
        <h3 className='text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
          Recents
        </h3>
      </div>
      <div className='flex-1 overflow-y-auto px-2'>
        <div className='space-y-1 pb-4'>
          {mockRecentChats.map((chat: RecentChat) => (
            <Link
              key={chat.id}
              to={`/chat/${chat.id}`}
              className={cn(
                'block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors',
                'truncate'
              )}
              title={chat.title}
            >
              {chat.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export { RecentChats };
