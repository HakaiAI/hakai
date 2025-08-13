import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
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
import { Loader2, ShieldCheck } from 'lucide-react';

type VerifyFormData = {
  token: string;
  email: string;
};

const VerifyPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const { token: urlToken } = useParams();
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerifyFormData>();

  // Pre-fill token from URL and email from query string
  React.useEffect(() => {
    if (urlToken) {
      setValue('token', urlToken);
    }

    const emailFromQuery = searchParams.get('email');
    if (emailFromQuery) {
      setValue('email', emailFromQuery);
    }
  }, [urlToken, searchParams, setValue]);

  const onSubmit: SubmitHandler<VerifyFormData> = async data => {
    setLoading(true);
    setError('');
    setSuccess(false);

    console.log('Verify data:', data);

    try {
      // Simulate API call to verify token
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock backend verification with email and token
      const mockVerification = async (
        verificationToken: string,
        userEmail: string
      ) => {
        // In a real app, this would be an API call

        // Simulate token validation
        if (!verificationToken || verificationToken.length < 10) {
          throw new Error('Invalid verification token format');
        }

        // Simulate email validation
        if (!userEmail.includes('@')) {
          throw new Error('Invalid email address');
        }

        // Simulate API response
        if (
          verificationToken.includes('invalid') ||
          userEmail.includes('invalid')
        ) {
          throw new Error(
            'This verification token has expired or is invalid for the provided email'
          );
        }

        return {
          success: true,
          message: 'Email verified successfully',
          userId: 'user_123',
          email: userEmail,
        };
      };

      const result = await mockVerification(data.token, data.email);

      if (result.success) {
        setSuccess(true);
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 2000);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Verification failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendToken = async () => {
    setLoading(true);
    setError('');

    try {
      // Simulate resending verification token
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock successful resend
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to resend verification token. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ShieldCheck className='h-5 w-5' />
            Verify Your Account
          </CardTitle>
          <CardDescription>
            Please enter your email and verification token to complete your
            account setup
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
                  Verification successful! Redirecting to login...
                </AlertDescription>
              </Alert>
            )}

            <div className='space-y-2'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                type='email'
                placeholder='user@example.com'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                disabled={!!searchParams.get('email')}
                className={searchParams.get('email') ? 'bg-gray-50' : ''}
              />
              {errors.email && (
                <p className='text-sm text-red-600'>{errors.email.message}</p>
              )}
              {searchParams.get('email') && (
                <p className='text-xs text-gray-500'>
                  Email pre-filled from verification link
                </p>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='token'>Verification Token</Label>
              <Input
                id='token'
                type='text'
                placeholder='Enter your verification token'
                {...register('token', {
                  required: 'Verification token is required',
                  minLength: {
                    value: 10,
                    message: 'Invalid verification token format',
                  },
                })}
                className='font-mono text-sm'
              />
              {errors.token && (
                <p className='text-sm text-red-600'>{errors.token.message}</p>
              )}
              <p className='text-sm text-gray-600'>
                This token should have been sent to your email address
              </p>
            </div>

            <Button
              type='submit'
              className='w-full'
              disabled={loading || success}
            >
              {loading ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Verifying...
                </>
              ) : (
                'Verify Token'
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className='flex flex-col space-y-4'>
          <div className='text-sm text-center'>
            <span className='text-gray-600'>Didn't receive the token? </span>
            <button
              type='button'
              className='text-primary hover:underline disabled:opacity-50'
              onClick={handleResendToken}
              disabled={loading}
            >
              Resend verification token
            </button>
          </div>

          <div className='text-sm text-center'>
            <button
              type='button'
              className='text-primary hover:underline'
              onClick={() => navigate('/login', { replace: true })}
            >
              Back to login
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VerifyPage;
