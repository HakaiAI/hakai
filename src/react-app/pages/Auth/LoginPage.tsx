import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LoginForm, LoginFormData } from './components/LoginForm';
import { GoogleSignInButton } from './components/GoogleSignInButton';
import { AuthFooter } from './components/AuthFooter';
import { AuthSeparator } from './components/AuthSeparator';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      // Simulate Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/', { replace: true });
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (data: LoginFormData) => {
    setLoading(true);

    try {
      console.log('Login data:', data);
      
      // Simulate login delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just navigate to home
      navigate('/', { replace: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Welcome back! Please sign in to your account.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <LoginForm onSubmit={handleLoginSubmit} isLoading={loading} />
        
        <div className="mt-6 flex flex-col gap-4">
          <AuthSeparator />
          
          <GoogleSignInButton
            onClick={handleGoogleLogin}
            loading={loading}
          />
        </div>
      </CardContent>
      
      <CardFooter>
        <AuthFooter />
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
