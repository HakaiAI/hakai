import { Plus } from 'lucide-react';
import { Link } from 'react-router';
import { SidebarNavItem } from './SidebarNavItem';

interface SidebarNavigationProps {
  isOpen: boolean;
}

export const SidebarNavigation = ({ isOpen }: SidebarNavigationProps) => {
  const menuItems = [
    {
      id: 'new-chat',
      label: 'New Chat',
      icon: <Plus size={20} />,
    },
  ];

  return (
    <div className='p-4'>
      <nav className='space-y-2'>
        {menuItems.map(item =>
          item.id === 'new-chat' ? (
            <Link key={item.id} to='/chat/new'>
              <SidebarNavItem
                icon={item.icon}
                label={item.label}
                isOpen={isOpen}
                variant='outline'
              />
            </Link>
          ) : (
            <SidebarNavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isOpen={isOpen}
            />
          )
        )}
      </nav>
    </div>
  );
};
