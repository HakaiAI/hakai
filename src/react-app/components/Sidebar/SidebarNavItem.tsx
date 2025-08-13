import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarNavItemProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  onClick?: () => void;
  variant?: 'ghost' | 'outline';
}

export const SidebarNavItem = ({
  icon,
  label,
  isOpen,
  onClick,
  variant = 'ghost',
}: SidebarNavItemProps) => {
  return (
    <Button
      variant={variant}
      className={cn(
        'w-full justify-start text-left',
        'hover:bg-gray-100 hover:text-gray-900',
        'transition-colors duration-200',
        !isOpen && 'justify-center px-2'
      )}
      onClick={onClick}
    >
      <span className='flex items-center space-x-3'>
        {icon}
        {isOpen && <span className='text-sm'>{label}</span>}
      </span>
    </Button>
  );
};
