import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '@/components/Sidebar/Sidebar';
import { LightbulbIcon, PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  // Toggle dark mode
  const toggleDarkMode = () => {}

  return (
    <div className='flex h-screen w-screen'>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main content area */}
      <main className='flex-1 flex flex-col relative overflow-x-hidden overflow-y-auto'>
        {/* Header */}
        <header className={cn('fixed w-full flex items-center top-0 right-0 bg-white border-b p-2.5 min-h-[57px] z-20', isSidebarOpen ? 'lg:w-[calc(100%-268px)]' : 'lg:w-[calc(100%-56px)]')}>
          {/* Mobile sidebar toggle button */}
          <button
            onClick={toggleSidebar}
            className='p-2 bg-white rounded-lg lg:hidden cursor-pointer'
            aria-label='Toggle sidebar'
          >
            <PanelLeft size={20} className='text-gray-600' />
          </button>
          <button
            onClick={toggleDarkMode}
            className='p-2 bg-white rounded-lg ml-auto cursor-pointer'
            aria-label='Toggle Dark Mode'
          >
            <LightbulbIcon size={20} className='text-gray-600' />
          </button>
        </header>

        {/* Content */}
        <div className='pt-[57px] flex-1 w-full'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
