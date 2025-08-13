import React from 'react';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import { Response } from '@/components/ai-elements/response';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatConversationProps {
  messages: ChatMessage[];
  className?: string;
}

const ChatConversation: React.FC<ChatConversationProps> = ({
  messages,
  className = '',
}) => {
  return (
    <Conversation className={`relative w-full ${className}`}>
      <ConversationContent>
        {messages.map(message => (
          <Message from={message.role} key={message.id}>
            <MessageContent>
              <Response>{message.content}</Response>
            </MessageContent>
          </Message>
        ))}
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  );
};

export default ChatConversation;
