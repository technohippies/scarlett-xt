import type { Meta, StoryObj } from '@storybook/react';
import { BookmarkChatMessage, type BookmarkChatMessageProps } from '../../../src/components/chat/BookmarkChatMessage'; // Adjust path
import type { Bookmark } from '../../../src/types/db'; // Import Bookmark type

// Helper to create a mock Bookmark object
const createMockBookmark = (overrides: Partial<Bookmark> = {}): Bookmark => ({
  id: 1,
  url: 'https://example.com',
  title: 'Example Domain',
  saved_at: new Date().toISOString(),
  tags: 'example,test',
  embedding: null, // Keep as null for story
  ...overrides,
});

const meta = {
  title: 'Components/Chat/BookmarkChatMessage',
  component: BookmarkChatMessage,
  parameters: {
    layout: 'padded', // Use padded layout to see the bubble effect
    notes: 'Displays a bookmarked page as an item within a chat feed.',
  },
  tags: ['autodocs'],
  argTypes: {
    // Update argTypes to reflect the 'bookmark' prop
    bookmark: {
      control: 'object',
      description: 'The full bookmark object containing URL, title, etc.',
    },
    // Remove old argTypes: title, url, id
  },
  args: {
    // Default args use the mock helper
    bookmark: createMockBookmark({
        id: 1,
        title: 'WebExt Core - Simplify Web Extension Development',
        url: 'https://github.com/webext-core/webext-core',
        tags: 'webext,core,library'
    }),
  },
} satisfies Meta<BookmarkChatMessageProps>; // Use the correct Props type here

export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const Default: Story = {
  args: {
    // Uses default args from meta, which now contains a bookmark object
  },
};

export const LongTitle: Story = {
  args: {
    bookmark: createMockBookmark({
        id: 2,
        title: 'This is a very long bookmark title that should ideally wrap or truncate nicely within the component constraints to avoid breaking the layout and ensure readability for the user.',
        url: 'https://example.com/long-title-page',
        tags: 'long,title'
    }),
  },
};

export const NoTitle: Story = {
  args: {
    // Pass a bookmark object with an empty title
     bookmark: createMockBookmark({
        id: 3,
        title: '', 
        url: 'https://example.com/no-title',
        tags: 'empty,test'
    }),
  },
  parameters: {
    notes: 'This story tests the component behavior when the bookmark title is missing. It should render (No Title).' // Updated note
  }
};

export const InvalidUrl: Story = {
  args: {
    // Pass a bookmark object with an invalid URL
     bookmark: createMockBookmark({
        id: 4,
        title: 'Page With Invalid URL',
        url: 'invalid-url-string',
        tags: 'invalid,url'
    }),
  },
    parameters: {
    notes: 'This story tests the component behavior when the bookmark URL is invalid. It should log a warning and display the URL as fallback hostname.' // Updated note
  }
}; 