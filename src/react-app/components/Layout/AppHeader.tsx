import { PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';

interface AppHeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const AppHeader = ({ isSidebarOpen, onToggleSidebar }: AppHeaderProps) => {
  return (
    <header
      className={cn(
        'fixed w-full flex items-center top-0 right-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800 p-2.5 min-h-[57px] z-20',
        isSidebarOpen ? 'lg:w-[calc(100%-268px)]' : 'lg:w-[calc(100%-56px)]'
      )}
    >
      {/* Mobile sidebar toggle button */}
      <button
        onClick={onToggleSidebar}
        className='p-2 bg-white dark:bg-gray-800 rounded-lg lg:hidden cursor-pointer'
        aria-label='Toggle sidebar'
      >
        <PanelLeft size={20} className='text-gray-600 dark:text-gray-300' />
      </button>
      
      <div className='ml-auto'>
        <ModeToggle />
      </div>
    </header>
  );
};