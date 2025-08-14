
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface SidebarHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const SidebarHeader = ({ isOpen, onToggle }: SidebarHeaderProps) => {
  return (
    <div className='flex items-center justify-between px-4 min-h-[57px] border-b border-sidebar-border bg-sidebar text-sidebar-foreground'>
      {isOpen && <span className='font-semibold'>HakaiAI</span>}
      <button
        onClick={onToggle}
        className='rounded-md hover:bg-sidebar-accent transition-colors px-0 mx-0 cursor-pointer text-sidebar-foreground/70 hover:text-sidebar-foreground'
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
      </button>
    </div>
  );
};
