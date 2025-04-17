import type { Meta, StoryObj } from '@storybook/react';
import { BookmarkChatMessage } from '../../../src/components/chat/BookmarkChatMessage'; // Adjust path

const meta = {
  title: 'Components/Chat/BookmarkChatMessage',
  component: BookmarkChatMessage,
  parameters: {
    layout: 'padded', // Use padded layout to see the bubble effect
    notes: 'Displays a bookmarked page as an item within a chat feed.',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the bookmarked page.',
    },
    url: {
      control: 'text',
      description: 'The URL of the bookmarked page.',
    },
    id: {
      control: false, // Don't show ID control in Storybook
      description: 'Optional unique key for lists.',
    },
  },
  args: {
    // Default args for stories
    title: 'WebExt Core - Simplify Web Extension Development',
    url: 'https://github.com/webext-core/webext-core',
    id: 'bookmark-1',
  },
} satisfies Meta<typeof BookmarkChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const Default: Story = {
  args: {
    // Uses default args from meta
  },
};

export const LongTitle: Story = {
  args: {
    title:
      'This is a very long bookmark title that should ideally wrap or truncate nicely within the component constraints to avoid breaking the layout and ensure readability for the user.',
    url: 'https://example.com/long-title-page',
    id: 'bookmark-long',
  },
};

export const NoTitle: Story = {
  args: {
    title: '', // Intentionally empty to test validation
    url: 'https://example.com/no-title',
    id: 'bookmark-no-title',
  },
  parameters: {
    notes: 'This story tests the component behavior when the title prop is missing. It should render nothing and log a warning.'
  }
};

export const NoUrl: Story = {
  args: {
    title: 'Page With No URL Provided',
    url: '', // Intentionally empty to test validation
    id: 'bookmark-no-url',
  },
    parameters: {
    notes: 'This story tests the component behavior when the url prop is missing. It should render nothing and log a warning.'
  }
}; 