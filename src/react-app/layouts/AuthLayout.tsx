import React from 'react';
import { Outlet } from 'react-router';
import { Shield } from 'lucide-react';

const AuthLayout: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='mb-8 text-center'>
          <div className='flex items-center justify-center mb-4'>
            <Shield className='h-12 w-12 text-primary' />
          </div>
          <h1 className='text-3xl font-bold text-gray-900'>Hakai AI</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
