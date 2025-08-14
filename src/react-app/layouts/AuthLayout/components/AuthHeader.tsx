import React from 'react';
import { Shield } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

interface AuthHeaderProps {
  title?: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ title = 'Hakai AI' }) => {
  return (
    <div className="mb-8 text-center relative">
      <div className="absolute top-0 right-0 -top-4 -right-4">
        <ModeToggle />
      </div>
      <div className="flex items-center justify-center mb-4">
        <Shield className="h-12 w-12 text-primary" />
      </div>
      <h1 className="text-3xl font-bold text-foreground">{title}</h1>
    </div>
  );
};