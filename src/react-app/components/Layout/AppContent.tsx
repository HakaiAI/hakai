import { Outlet } from 'react-router';

interface AppContentProps {
  children?: React.ReactNode;
}

export const AppContent = ({ children }: AppContentProps) => {
  return (
    <div className='pt-[57px] flex-1 w-full'>
      {children || <Outlet />}
    </div>
  );
};