import { Outlet } from 'react-router';
import Sidebar from '@/components/Sidebar/Sidebar';
import { AppHeader, AppContent } from '@/components/Layout';
import { useSidebar } from '@/hooks/useSidebar';

const AppLayout = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className='flex h-screen w-screen'>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main content area */}
      <main className='flex-1 flex flex-col relative overflow-x-hidden overflow-y-auto'>
        {/* Header */}
        <AppHeader isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

        {/* Content */}
        <AppContent>
          <Outlet />
        </AppContent>
      </main>
    </div>
  );
};

export default AppLayout;
