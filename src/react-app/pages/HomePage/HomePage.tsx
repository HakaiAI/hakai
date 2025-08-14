import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import HeroSection from '@/pages/HomePage/HeroSection';
import ChatPrompt from '@/components/ChatPrompt';

const HomePage: React.FC = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const randomUid = crypto.randomUUID();
    navigate(`/chat/${randomUid}`);
  };

  const handleAttach = () => {
    // Handle file attachment here
    console.log('Attach button clicked');
  };

  return (
    <div className='p-8 w-full h-full flex items-center justify-center bg-sidebar text-sidebar-foreground'>
      <div className='flex justify-center flex-col max-w-2xl w-full'>
        <HeroSection
          title='Welcome to HakaiAI'
          description='Your AI-powered lead qualitification assistant.'
        />
        <ChatPrompt
          value={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          onAttach={handleAttach}
        />
      </div>
    </div>
  );
};

export default HomePage;
