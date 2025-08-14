import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RegisterForm, RegisterFormData } from './components/RegisterForm';
import { GoogleSignInButton } from './components/GoogleSignInButton';
import { AuthSeparator } from './components/AuthSeparator';
import { AuthFooter } from './components/AuthFooter';
import { AuthAlert } from './components/AuthAlert';

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleGoogleRegister = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Simulate Google OAuth registration flow
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For demo purposes, show success and navigate to home
      setSuccess('Account created successfully! Redirecting...');
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
    } catch {
      setError('Failed to register with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      console.log('Register data:', data);

      // Simulate registration delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // For demo purposes, show success and navigate to login
      setSuccess('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 2000);
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Join us today! Create your account to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <AuthAlert type="error" message={error} />
          <AuthAlert type="success" message={success} />

          <RegisterForm 
            onSubmit={handleRegisterSubmit} 
            isLoading={loading} 
          />

          <div className="mt-6 flex flex-col gap-4">
            <AuthSeparator />
            <GoogleSignInButton 
              onClick={handleGoogleRegister}
              disabled={loading}
              loading={loading}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <AuthFooter />
      </CardFooter>
    </Card>
  );
};

export default RegisterPage;
