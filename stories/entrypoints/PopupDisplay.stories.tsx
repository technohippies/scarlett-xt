import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PopupDisplay from '../../src/components/PopupDisplay'; // Path relative to new location
import '../../src/index.css'; // Import global CSS

const meta = {
  title: 'Entrypoints/Popup', // Changed from PopupDisplay to Popup
  component: PopupDisplay,
  parameters: {
    // Use a fixed viewport similar to the popup size
    viewport: { defaultViewport: 'popup' }, 
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pageTitle: { control: 'text' },
    pageUrl: { control: 'text' },
    status: { control: 'text' },
    isClipping: { control: 'boolean' },
    canClip: { control: 'boolean' },
    clipButtonText: { control: 'text' },
    statusIsError: { control: 'boolean' },
    tagsValue: { control: 'text' },
    onSettingsClick: { action: 'settingsClicked' }, // Add argType for the action
  },
  args: {
    onClip: fn(),
    onTagsChange: fn(),
    onSettingsClick: fn(), // Add mock function for settings click
    pageTitle: 'Example Web Page Title That Might Be Quite Long Sometimes',
    pageUrl: 'https://example.com/path/to/a/very/long/url/that/needs/truncation',
    status: '',
    isClipping: false,
    canClip: true,
    clipButtonText: 'Save',
    statusIsError: false,
    tagsValue: 'web, example, test',
  },
} satisfies Meta<typeof PopupDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Clipping: Story = {
  args: {
    isClipping: true,
    status: 'Saving bookmark...', // Status often changes during clipping
  },
};

export const CannotClip: Story = {
  args: {
    canClip: false,
    pageTitle: undefined, // No title when not clippable
    pageUrl: undefined, // No URL when not clippable
    status: 'Open a web page to save a bookmark.', // Neutral status
    statusIsError: false, // Not an error
    tagsValue: '', // Tags empty
  },
};

export const ErrorStatus: Story = {
  args: {
    status: 'Error: Could not connect to background service.',
    statusIsError: true,
    canClip: false, // Usually can't clip if there's an error
  },
};

export const RealisticExample: Story = {
  args: {
    pageTitle: 'The Matrix - Wikipedia',
    pageUrl: 'https://en.wikipedia.org/wiki/The_Matrix',
    tagsValue: 'sci-fi, action, movie, Wachowskis',
    status: 'Ready.',
    isClipping: false,
    canClip: true,
    statusIsError: false,
  },
};

export const LongTags: Story = {
  args: {
    tagsValue: 'longtagone, anotherevenlongertag, webext, development, react, storybook, testing, css, tailwindcss, javascript, typescript',
  },
}; 