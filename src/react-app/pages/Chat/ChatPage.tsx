import React, { useState } from 'react';
import ChatPrompt from '@/components/ChatPrompt/ChatPrompt';
import ChatConversation from '@/components/ChatConversation/ChatConversation';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'user' as const, content: 'Hello!' },
    {
      id: '2',
      role: 'assistant' as const,
      content: 'Hi there! How can I help you today?',
    },
  ]);
  const [status, setStatus] = useState<'ready' | 'loading' | 'streaming'>(
    'ready'
  );

  const sendMessage = ({ text }: { text: string }) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    };

    setMessages(prev => [...prev, userMessage]);
    setStatus('streaming');

    // Mock AI response after delay
    setTimeout(
      () => {
        const responses = [
          "That's an interesting point! Let me think about that.",
          "I understand what you're saying. Here's my perspective...",
          "Thank you for sharing that. I'd like to add...",
          "That's a great question! Let me help you with that.",
          "I see what you mean. Here's what I think...",
        ];

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responses[Math.floor(Math.random() * responses.length)],
        };

        setMessages(prev => [...prev, assistantMessage]);
        setStatus('ready');
      },
      1000 + Math.random() * 2000
    );
  };

  return { messages, sendMessage, status };
};

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const { messages, sendMessage } = useChat();

  const isSidebarOpen = true;

  const handleSubmit = (event?: React.FormEvent) => {
    event?.preventDefault();
    if (message.trim()) {
      sendMessage({ text: message });
      setMessage('');
    }
  };

  const handleAttach = () => {
    console.log('Attach clicked');
  };

  return (
    <div className='h-screen'>
      <div className='mx-auto px-4 pt-4 lg:px-0 lg:w-3xl pb-44'>
        <ChatConversation messages={messages} className='h-full' />
      </div>
      <div
        className={cn(
          'fixed w-full flex items-center bottom-4 right-0 z-20',
          isSidebarOpen ? 'lg:w-[calc(100%-268px)]' : 'lg:w-[calc(100%-56px)]'
        )}
      >
        <div className='mx-auto px-4 w-full lg:px-0 lg:w-3xl'>
          <ChatPrompt
            value={message}
            onChange={setMessage}
            onSubmit={handleSubmit}
            onAttach={handleAttach}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
