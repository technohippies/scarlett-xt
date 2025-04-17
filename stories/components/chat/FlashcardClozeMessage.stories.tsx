import type { Meta, StoryObj } from '@storybook/react';
import { FlashcardClozeMessage } from '../../../src/components/chat/FlashcardClozeMessage'; // Adjust path

const meta = {
  title: 'Components/Chat/FlashcardClozeMessage',
  component: FlashcardClozeMessage,
  parameters: {
    layout: 'padded',
    notes: 'Displays a static message representing a Cloze flashcard (using {{c1::...}} syntax), styled like a bookmark.',
  },
  tags: ['autodocs'],
  argTypes: {
    clozeText: {
      control: 'text',
      description: 'The full cloze text, including syntax like {{c1::answer::hint}}.',
    },
    id: {
      control: false,
      description: 'Optional unique key for lists.',
    },
  },
  args: {
    // Default args for stories
    clozeText: 'The capital of {{c1::France}} is {{c2::Paris}}.',
    id: 'fcm-1',
  },
} satisfies Meta<typeof FlashcardClozeMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const Default: Story = {
  args: {},
};

export const LongText: Story = {
  args: {
    clozeText:
      'The {{c1::OSI model}} has {{c2::7 layers}}, including Application, Presentation, Session, {{c3::Transport}}, Network, Data Link, and {{c4::Physical}}.',
    id: 'fcm-long',
  },
};

export const WithHint: Story = {
  args: {
    clozeText:
      `Mount {{c1::Everest::World's highest peak}} is located in the {{c2::Himalayas}}.`,
    id: 'fcm-hint',
  },
};

export const NoClozeText: Story = {
  args: {
    clozeText: '',
    id: 'fcm-no-text',
  },
  parameters: {
      notes: "Component should render null if clozeText is empty."
  }
}; 