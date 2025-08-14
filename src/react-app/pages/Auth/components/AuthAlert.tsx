import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AuthAlertProps {
  type: 'success' | 'error';
  message: string;
}

export const AuthAlert: React.FC<AuthAlertProps> = ({ type, message }) => {
  if (!message) return null;

  return (
    <Alert variant={type === 'error' ? 'destructive' : 'default'}>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};