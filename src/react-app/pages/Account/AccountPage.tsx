import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AccountLoadingSkeleton from './components/AccountLoadingSkeleton';
import ProfileSection from './components/ProfileSection';
import SecuritySection from './components/SecuritySection';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  about: string;
}

interface SecurityFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const AccountPage: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const profileForm = useForm<ProfileFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      email: 'user@example.com',
      about: '',
    },
  });

  const securityForm = useForm<SecurityFormData>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onProfileSubmit = (data: ProfileFormData) => {
    console.log('Profile data:', data);
  };

  const onSecuritySubmit = (data: SecurityFormData) => {
    console.log('Security data:', data);
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setAvatarUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  if (isLoading) {
    return <AccountLoadingSkeleton />;
  }

  return (
    <div className='container mx-auto py-8 space-y-8 px-4 max-w-4xl'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tight'>Account Settings</h1>
        <p className='text-muted-foreground'>
          Manage your account settings and preferences
        </p>
      </div>

      <ProfileSection
        form={profileForm}
        onSubmit={onProfileSubmit}
        avatarUrl={avatarUrl}
        onAvatarChange={handleAvatarChange}
        getInitials={getInitials}
      />

      <SecuritySection form={securityForm} onSubmit={onSecuritySubmit} />
    </div>
  );
};

export default AccountPage;
