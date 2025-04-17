import type { Meta, StoryObj } from '@storybook/react';
import { FlashcardFrontBackMessage } from '../../../src/components/chat/FlashcardFrontBackMessage'; // Adjust path

const meta = {
  title: 'Components/Chat/FlashcardFrontBackMessage',
  component: FlashcardFrontBackMessage,
  parameters: {
    layout: 'padded',
    notes: 'Displays a static message representing a Front/Back flashcard, styled like a bookmark.',
  },
  tags: ['autodocs'],
  argTypes: {
    frontText: {
      control: 'text',
      description: 'Text for the front of the card.',
    },
    backText: {
      control: 'text',
      description: 'Text for the back of the card.',
    },
    id: {
      control: false,
      description: 'Optional unique key for lists.',
    },
  },
  args: {
    // Default args for stories
    frontText: 'What is the capital of France?',
    backText: 'Paris',
    id: 'ffb-1',
  },
} satisfies Meta<typeof FlashcardFrontBackMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const Default: Story = {
  args: {},
};

export const LongFrontAndBack: Story = {
  args: {
    frontText:
      'What protocol operates at the transport layer and provides connectionless communication?',
    backText:
      'UDP (User Datagram Protocol)',
    id: 'ffb-long',
  },
};

export const LongFrontOnly: Story = {
  args: {
    frontText:
      'Explain the main purpose of the `useEffect` hook in React components.',
    backText: 'Manage side effects',
    id: 'ffb-long-front',
  },
};

export const LongBackOnly: Story = {
  args: {
    frontText: 'React hook for state',
    backText:
      'The `useState` hook allows functional components to manage local state.',
    id: 'ffb-long-back',
  },
};

export const NoFront: Story = {
  args: {
    frontText: '',
    backText: 'This is the back text only.',
    id: 'ffb-no-front',
  },
};

export const NoBack: Story = {
  args: {
    frontText: 'This is the front text only.',
    backText: '',
    id: 'ffb-no-back',
  },
};

export const NoText: Story = {
  args: {
    frontText: '',
    backText: '',
    id: 'ffb-no-text',
  },
  parameters: {
      notes: "Component should render null if both front and back are empty."
  }
}; 