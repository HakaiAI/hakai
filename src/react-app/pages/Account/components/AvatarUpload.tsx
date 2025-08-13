import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AvatarUploadProps {
  avatarUrl: string;
  onAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  initials: string;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({
  avatarUrl,
  onAvatarChange,
  initials,
}) => {
  return (
    <div className='flex items-center gap-4 flex-wrap'>
      <Avatar className='h-20 w-20'>
        <AvatarImage src={avatarUrl} alt='Profile picture' />
        <AvatarFallback className='text-lg'>{initials}</AvatarFallback>
      </Avatar>
      <div className='min-w-0'>
        <label
          htmlFor='avatar-upload'
          className='cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 whitespace-nowrap'
        >
          Change Avatar
        </label>
        <input
          id='avatar-upload'
          type='file'
          accept='image/*'
          className='hidden'
          onChange={onAvatarChange}
        />
        <p className='text-sm text-muted-foreground mt-1'>
          JPG, PNG or GIF (max 2MB)
        </p>
      </div>
    </div>
  );
};

export default AvatarUpload;
