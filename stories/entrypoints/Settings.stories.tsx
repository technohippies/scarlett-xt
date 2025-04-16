import type { Meta, StoryObj } from '@storybook/react';
import SettingsApp from '../../entrypoints/settings/SettingsApp'; // Adjust path
import '../../src/index.css'; // Import global CSS

const meta = {
  title: 'Entrypoints/Settings',
  component: SettingsApp,
  parameters: {
    // Settings pages often take up more space
    layout: 'padded', // Use padded layout
  },
  tags: ['autodocs'],
  // Add args/argTypes here if SettingsApp starts accepting props
  args: {},
} satisfies Meta<typeof SettingsApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 