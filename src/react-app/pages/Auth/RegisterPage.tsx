import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const handleGoogleRegister = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate Google OAuth registration flow
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, show success and navigate to home
    setSuccess('Account created successfully! Redirecting...');
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);

    setLoading(false);
  };

  const onSubmit: SubmitHandler<RegisterFormData> = async data => {
    setLoading(true);
    setError('');
    setSuccess('');

    console.log('Register data:', data);

    // Simulate registration delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo purposes, show success and navigate to login
    setSuccess('Account created successfully! Redirecting to login...');
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 2000);

    setLoading(false);
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
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          {error && (
            <Alert variant='destructive'>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert>
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='firstName'>First Name</Label>
              <Input
                id='firstName'
                type='text'
                placeholder='John'
                {...register('firstName', {
                  required: 'First name is required',
                  minLength: {
                    value: 2,
                    message: 'First name must be at least 2 characters',
                  },
                })}
              />
              {errors.firstName && (
                <p className='text-sm text-red-600'>
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='lastName'>Last Name</Label>
              <Input
                id='lastName'
                type='text'
                placeholder='Doe'
                {...register('lastName', {
                  required: 'Last name is required',
                  minLength: {
                    value: 2,
                    message: 'Last name must be at least 2 characters',
                  },
                })}
              />
              {errors.lastName && (
                <p className='text-sm text-red-600'>
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='john.doe@example.com'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className='text-sm text-red-600'>{errors.email.message}</p>
            )}
          </div>

          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='••••••••'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && (
              <p className='text-sm text-red-600'>{errors.password.message}</p>
            )}
          </div>

          <div className='space-y-2'>
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <Input
              id='confirmPassword'
              type='password'
              placeholder='••••••••'
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: value =>
                  value === watch('password') || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && (
              <p className='text-sm text-red-600'>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type='submit' className='w-full' disabled={loading}>
            {loading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Creating account...
              </>
            ) : (
              'Sign Up'
            )}
          </Button>
        </form>

        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <Separator />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-white px-2 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <Button
            type='button'
            variant='outline'
            className='w-full mt-4'
            onClick={handleGoogleRegister}
            disabled={loading}
          >
            <svg className='mr-2 h-4 w-4' viewBox='0 0 24 24'>
              <path
                fill='#4285F4'
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              />
              <path
                fill='#34A853'
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              />
              <path
                fill='#FBBC05'
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              />
              <path
                fill='#EA4335'
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              />
            </svg>
            Continue with Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className='flex flex-col space-y-2'>
        <div className='text-sm text-center'>
          <span className='text-gray-600'>Already have an account? </span>
          <button
            type='button'
            className='text-primary hover:underline'
            onClick={() => navigate('/login')}
          >
            Sign in
          </button>
        </div>
        <div className='text-sm text-center'>
          <button
            type='button'
            className='text-primary hover:underline'
            onClick={() => navigate('/terms')}
          >
            Terms of Service
          </button>
          <span className='text-gray-600 mx-2'>•</span>
          <button
            type='button'
            className='text-primary hover:underline'
            onClick={() => navigate('/privacy')}
          >
            Privacy Policy
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterPage;
