import React from 'react';
import { Outlet } from 'react-router';
import { AuthContainer, AuthHeader, AuthCard } from './AuthLayout/components';

const AuthLayout: React.FC = () => {
  return (
    <AuthContainer>
      <AuthCard>
        <AuthHeader />
        <Outlet />
      </AuthCard>
    </AuthContainer>
  );
};

export default AuthLayout;
