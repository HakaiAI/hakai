import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '@/components/Sidebar/Sidebar';
import { PanelLeft } from 'lucide-react';

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex h-screen bg-gray-50'>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main content area */}
      <main className='flex-1 transition-all duration-300 ease-in-out flex flex-col relative'>
        {/* Header */}
        <header className='relative bg-white border-b p-2.5 lg:hidden'>
          {/* Mobile sidebar toggle button */}
          <button
            onClick={toggleSidebar}
            className='p-2 bg-white rounded-lg lg:hidden'
            aria-label='Toggle sidebar'
          >
            <PanelLeft size={20} className='text-gray-600' />
          </button>
        </header>

        {/* Content */}
        <div className='flex-1 overflow-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
