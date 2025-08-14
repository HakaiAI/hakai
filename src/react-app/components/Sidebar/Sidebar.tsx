import { cn } from '@/lib/utils';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { RecentChats } from './RecentChats';
import { SidebarFooter } from './SidebarFooter';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
return (
  <>
    {/* Mobile overlay */}
    <div
      className={cn(
        'fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ease-in-out',
        {
          'opacity-100': isOpen,
          'opacity-0 pointer-events-none': !isOpen,
        }
      )}
      onClick={onToggle}
    />

    {/* Sidebar */}
    <aside
      className={cn(
        'fixed top-0 left-0 h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border z-50 transition-transform duration-300 ease-in-out',
        'lg:relative lg:z-30 lg:transition-all lg:duration-300',
        {
          'translate-x-0': isOpen,
          '-translate-x-full lg:translate-x-0': !isOpen,
        }
      )}
      style={{
        width: isOpen ? '268px' : '56px',
      }}
    >
      <div className='flex flex-col h-full w-full'>
        <SidebarHeader isOpen={isOpen} onToggle={onToggle} />
        <SidebarNavigation isOpen={isOpen} />
        <RecentChats isOpen={isOpen} />
        <div className='mt-auto'>
          <SidebarFooter isOpen={isOpen} />
        </div>
      </div>
    </aside>
  </>
);
};

export default Sidebar;
