import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import App from '../../entrypoints/popup/App'; // Adjust path to your Popup App component
import '../../src/index.css'; // Import global CSS

// Mock browser API for Storybook environment
// @ts-ignore
window.browser = {
  tabs: {
    query: async (options: any) => {
      console.log('Storybook Mock: browser.tabs.query called with', options);
      // Simulate finding an active tab
      return [
        {
          id: 1,
          title: 'Storybook Mock Page Title',
          url: 'https://storybook.js.org/mock-url',
          active: true,
          currentWindow: true,
        },
      ];
    },
  },
  runtime: {
    sendMessage: async (messageId: string, payload: any) => {
      console.log('Storybook Mock: browser.runtime.sendMessage called:', messageId, payload);
      // Simulate a successful response after a delay
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      if (messageId === 'clipPage') {
        // Simulate success
        // return { status: 'success' };
        // Simulate failure
         throw new Error('Storybook Mock: Failed to save bookmark');
      }
      return undefined;
    },
    openOptionsPage: () => {
      console.log('Storybook Mock: browser.runtime.openOptionsPage called');
      alert('Simulating opening settings page...');
    },
    getURL: (path: string) => `/__mock_extension_url__${path}`, // Simple mock
    getManifest: () => ({ version: '0.1.0-storybook' }),
    onInstalled: {
        addListener: () => console.log('Storybook Mock: browser.runtime.onInstalled.addListener called'),
    }
  },
  // Add other browser APIs your component might use
};

const meta = {
  title: 'Entrypoints/Popup',
  component: App,
  parameters: {
    // Use a fixed viewport similar to the popup size
    viewport: { defaultViewport: 'popup' },
    layout: 'fullscreen', // Use fullscreen to see the component within its context
  },
  tags: ['autodocs'],
  // No args/argTypes needed here typically, as it pulls state from mocked APIs
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

// This story represents the default state when the popup opens
export const Default: Story = {};

// Note: Simulating different API responses (e.g., different tab types, 
// sendMessage errors) is harder without more complex mocking or decorators.
// The current mock provides a basic successful load and a failed clip. 