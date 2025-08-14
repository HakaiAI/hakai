import React from 'react';
import { cn } from '@/lib/utils';

interface AuthContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const AuthContainer: React.FC<AuthContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'min-h-screen bg-[--background] flex items-center justify-center p-4 transition-colors duration-300',
        className
      )}
    >
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};