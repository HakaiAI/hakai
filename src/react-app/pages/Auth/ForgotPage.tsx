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

type ForgotPasswordFormData = {
  email: string;
};

const ForgotPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async data => {
    setLoading(true);
    setError('');
    setSuccess(false);

    console.log('Forgot password data:', data);

    // Simulate password reset request
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo purposes, show success message
    setSuccess(true);
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
        <CardDescription>
          Enter your email address and we'll send you a link to reset your
          password.
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
                If an account exists with this email, you will receive a
                password reset link shortly.
              </AlertDescription>
            </Alert>
          )}

          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='demo@example.com'
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

          <Button type='submit' className='w-full' disabled={loading}>
            {loading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Sending reset link...
              </>
            ) : (
              'Send Reset Link'
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
        <div className='text-sm text-center'>
          <span className='text-gray-600'>Don't have an account? </span>
          <button
            type='button'
            className='text-primary hover:underline'
            onClick={() => navigate('/register')}
          >
            Sign up
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForgotPage;
