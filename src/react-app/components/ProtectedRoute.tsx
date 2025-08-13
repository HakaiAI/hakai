import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface PublicRouteProps {
  redirectTo?: string;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  redirectTo = '/dashboard',
}) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Loader2 className='h-8 w-8 animate-spin' />
      </div>
    );
  }

  if (isAuthenticated) {
    // Redirect to the intended destination or dashboard
    const from = location.state?.from?.pathname || redirectTo;
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
};

interface PrivateRouteProps {
  redirectTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  redirectTo = '/login',
}) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Loader2 className='h-8 w-8 animate-spin' />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Store the current location to redirect back after login
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  return <Outlet />;
};
