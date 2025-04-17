import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessageBase } from '../../../src/components/chat/ChatMessageBase'; // Adjust path
import type { ChatMessage } from '../../../src/types/chat';

const meta = {
  title: 'Components/Chat/ChatMessageBase',
  component: ChatMessageBase,
  parameters: {
    layout: 'padded',
    notes: 'Base component for displaying a single chat message bubble (user or assistant).',
  },
  tags: ['autodocs'],
  argTypes: {
    role: {
      control: 'radio',
      options: ['user', 'assistant'],
      description: 'Determines the styling and alignment.',
    },
    content: {
      control: 'text',
      description: 'The text content of the message.',
    },
    isError: {
      control: 'boolean',
      description: 'Applies error styling (only relevant for assistant role).',
    },
    id: {
      control: false, // Don't show ID in controls
      description: 'Unique identifier (used as key).',
    },
  },
  args: {
    // Default args for stories
    id: 'msg-1',
    role: 'assistant',
    content: 'Hello! How can I help you today?',
    isError: false,
  },
} satisfies Meta<typeof ChatMessageBase>;

export default meta;

// Define the Story type using the component's type
type Story = StoryObj<typeof ChatMessageBase>; // Changed from StoryObj<ChatMessage>

// === Stories ===

export const AssistantDefault: Story = {
  args: {
    role: 'assistant',
    content: 'This is a standard response from the assistant.',
  },
};

export const UserDefault: Story = {
  args: {
    role: 'user',
    content: 'This is a message sent by the user.',
  },
};

export const AssistantError: Story = {
  args: {
    role: 'assistant',
    content: 'Sorry, I encountered an error trying to process your request.',
    isError: true,
  },
};

export const AssistantLong: Story = {
  args: {
    role: 'assistant',
    content:
      'This is a longer message from the assistant to demonstrate how text wrapping behaves within the constrained width of the message bubble. It should wrap naturally to multiple lines without breaking the layout.',
  },
};

export const UserLong: Story = {
  args: {
    role: 'user',
    content:
      'Here is a longer user message that also needs to wrap correctly. Users might type paragraphs, and the UI needs to handle this gracefully, maintaining the alignment and bubble shape.',
  },
};

export const AssistantWithNewlines: Story = {
  args: {
    role: 'assistant',
    content: `This message includes newline characters.
Here is the second line.
  - And an indented list item.

And a paragraph break.`,
  },
}; 