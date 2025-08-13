import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
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

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

const ResetPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormData>();

  const onSubmit: SubmitHandler<ResetPasswordFormData> = async data => {
    setLoading(true);
    setError('');
    setSuccess(false);

    console.log('Reset password data:', data, 'Token:', token);

    // Simulate password reset
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo purposes, show success
    setSuccess(true);
    setLoading(false);

    // Redirect to login after 2 seconds
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 2000);
  };

  // If no token is present, show error
  if (!token) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Invalid Reset Link</CardTitle>
          <CardDescription>
            This password reset link is invalid or has expired.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant='destructive'>
            <AlertDescription>
              Please request a new password reset link.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter>
          <Button onClick={() => navigate('/forgot')} className='w-full'>
            Request New Reset Link
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>
          Enter your new password below to reset your account password.
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
              <AlertDescription>
                Your password has been reset successfully! Redirecting to
                login...
              </AlertDescription>
            </Alert>
          )}

          <div className='space-y-2'>
            <Label htmlFor='password'>New Password</Label>
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
            <Label htmlFor='confirmPassword'>Confirm New Password</Label>
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
                Resetting password...
              </>
            ) : (
              'Reset Password'
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className='flex flex-col space-y-2'>
        <div className='text-sm text-center'>
          <span className='text-gray-600'>Remember your password? </span>
          <button
            type='button'
            className='text-primary hover:underline'
            onClick={() => navigate('/login')}
          >
            Sign in
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResetPage;
