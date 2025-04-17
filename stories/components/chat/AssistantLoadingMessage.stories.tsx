import type { Meta, StoryObj } from '@storybook/react';
import { AssistantLoadingMessage } from '../../../src/components/chat/AssistantLoadingMessage'; // Adjust path

const meta = {
  title: 'Components/Chat/AssistantLoadingMessage',
  component: AssistantLoadingMessage,
  parameters: {
    layout: 'padded',
    notes: 'Displays a loading indicator (pulsing dots) styled like an assistant message bubble.',
  },
  tags: ['autodocs'],
  // No args needed for this component
} satisfies Meta<typeof AssistantLoadingMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const Default: Story = {
  // No args needed
}; 