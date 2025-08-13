import React from 'react';
import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputButton,
} from '@/components/ai-elements/prompt-input';
import { PaperclipIcon } from 'lucide-react';

export interface ChatPromptProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onAttach?: () => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const ChatPrompt: React.FC<ChatPromptProps> = ({
  value,
  onChange,
  onSubmit,
  onAttach,
  placeholder = 'Ask me anything...',
  disabled = false,
  className = 'mt-4 relative',
}) => {
  return (
    <PromptInput onSubmit={onSubmit} className={className}>
      <PromptInputTextarea
        onChange={e => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
      <PromptInputToolbar>
        <PromptInputTools>
          {onAttach && (
            <PromptInputButton onClick={onAttach}>
              <PaperclipIcon size={16} />
            </PromptInputButton>
          )}
        </PromptInputTools>
        <PromptInputSubmit
          disabled={!value.trim() || disabled}
          status={'ready'}
        />
      </PromptInputToolbar>
    </PromptInput>
  );
};

export default ChatPrompt;
