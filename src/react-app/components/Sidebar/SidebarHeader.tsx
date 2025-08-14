
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface SidebarHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const SidebarHeader = ({ isOpen, onToggle }: SidebarHeaderProps) => {
  return (
    <div className='flex items-center justify-between px-4 min-h-[57px] border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
      {isOpen && <span className='font-semibold text-gray-800 dark:text-gray-100'>HakaiAI</span>}
      <button
        onClick={onToggle}
        className='rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors px-0 mx-0 cursor-pointer text-gray-600 dark:text-gray-400'
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
      </button>
    </div>
  );
};
