import type { Meta, StoryObj } from '@storybook/react';
import SettingsApp from '../../entrypoints/settings/SettingsApp';
import '../../src/index.css'; // Import global CSS

const meta = {
  title: 'Entrypoints/SettingsApp',
  component: SettingsApp,
  parameters: {
    // Use fullscreen layout to better represent the app structure
    layout: 'fullscreen', 
    // Optionally add notes about the structure
    notes: 'The main settings page application layout, integrating the navigation sidebar and section content.'
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