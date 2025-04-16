import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PopupDisplay from '../../src/components/PopupDisplay'; // Adjust path
import '../../src/index.css'; // Import global CSS

const meta = {
  title: 'Components/PopupDisplay',
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
  },
  args: {
    onClip: fn(),
    onTagsChange: fn(),
    pageTitle: 'Example Web Page Title That Might Be Quite Long Sometimes',
    pageUrl: 'https://example.com/path/to/a/very/long/url/that/needs/truncation',
    status: 'Ready to clip.',
    isClipping: false,
    canClip: true,
    clipButtonText: 'Save Bookmark',
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
    pageTitle: 'New Tab',
    pageUrl: 'chrome://newtab/',
    status: 'Cannot clip this type of page.',
    statusIsError: true,
  },
};

export const ErrorStatus: Story = {
  args: {
    status: 'Error: Could not connect to background service.',
    statusIsError: true,
  },
};

export const NoPageInfo: Story = {
  args: {
    pageTitle: undefined,
    pageUrl: undefined,
    canClip: false,
    status: 'Could not get page information.',
    statusIsError: true,
  },
};

export const LongTags: Story = {
  args: {
    tagsValue: 'longtagone, anotherevenlongertag, webext, development, react, storybook, testing, css, tailwindcss, javascript, typescript',
  },
}; 