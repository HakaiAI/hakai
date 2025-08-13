import {
  ChevronUp,
  User,
  CreditCard,
  FileText,
  LogOut,
  Clock,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface SidebarFooterProps {
  isOpen: boolean;
}

export const SidebarFooter = ({ isOpen }: SidebarFooterProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const userName = 'John Dave Decano';
  const subscriptionPlan = 'Free Plan';
  const userInitials = userName
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const handleMenuClick = (path: string) => {
    setIsDropdownOpen(false);
    if (path === '/logout') {
      // Handle logout logic here
      console.log('Logging out...');
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  const Avatar = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={`size-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700 ${className}`}
    >
      {children}
    </div>
  );

  const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
    <div className='relative'>{children}</div>
  );

  const DropdownItem = ({
    icon: Icon,
    children,
    path,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
    path: string;
  }) => (
    <button
      className='w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'
      onClick={() => handleMenuClick(path)}
    >
      <Icon className='h-4 w-4' />
      {children}
    </button>
  );

  if (!isOpen) {
    return (
      <div className='p-2 border-t border-gray-200 flex items-center justify-center'>
        <DropdownMenu>
          <button
            className='w-full flex items-center justify-center'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Avatar>{userInitials}</Avatar>
          </button>
          {isDropdownOpen && (
            <div className='absolute left-full bottom-0 ml-2 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-48 z-50'>
              <DropdownItem icon={Clock} path='/history'>
                History
              </DropdownItem>
              <DropdownItem icon={User} path='/account'>
                Account
              </DropdownItem>
              <DropdownItem icon={CreditCard} path='/billing'>
                Billing
              </DropdownItem>
              <DropdownItem icon={FileText} path='/reports'>
                Reports
              </DropdownItem>
              <div className='border-t border-gray-200 my-1'></div>
              <DropdownItem icon={LogOut} path='/logout'>
                Logout
              </DropdownItem>
            </div>
          )}
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className='p-3 border-t border-gray-200'>
      <DropdownMenu>
        <button
          className='w-full flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition-colors'
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Avatar>{userInitials}</Avatar>
          <div className='flex-1 text-left'>
            <p className='text-sm font-medium text-gray-900'>{userName}</p>
            <p className='text-xs text-gray-500'>{subscriptionPlan}</p>
          </div>
          <ChevronUp className='h-4 w-4 text-gray-400' />
        </button>
        {isDropdownOpen && (
          <div className='absolute bottom-full left-3 right-3 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50'>
            <DropdownItem icon={Clock} path='/history'>
              History
            </DropdownItem>
            <DropdownItem icon={User} path='/account'>
              Account
            </DropdownItem>
            <DropdownItem icon={CreditCard} path='/billing'>
              Billing
            </DropdownItem>
            <DropdownItem icon={FileText} path='/reports'>
              Reports
            </DropdownItem>
            <div className='border-t border-gray-200 my-1'></div>
            <DropdownItem icon={LogOut} path='/logout'>
              Logout
            </DropdownItem>
          </div>
        )}
      </DropdownMenu>
    </div>
  );
};
