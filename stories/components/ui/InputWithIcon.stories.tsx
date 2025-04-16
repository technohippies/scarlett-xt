import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InputWithIcon } from '../../../src/components/ui/input-with-icon'; // Adjust path as needed
import { Key } from '@phosphor-icons/react'; // Corrected package name

const meta = {
  title: 'UI/InputWithIcon',
  component: InputWithIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    // We can't easily control the icon itself via Storybook args, show examples instead
  },
  args: {
    onChange: fn(),
    placeholder: 'Enter API Key...',
    icon: <Key />, // Use Phosphor Key icon
    iconPosition: 'left',
    type: 'password' // Default to password for API key example
  },
} satisfies Meta<typeof InputWithIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftIcon: Story = {
  args: {
    icon: <Key />, // Use key for example
    iconPosition: 'left',
    placeholder: 'Paste API key...',
    type: 'text', // Reset type for general example
  },
};

export const RightIcon: Story = {
  args: {
    icon: <Key />, // Use key for example
    iconPosition: 'right',
    placeholder: 'Input with right icon',
    type: 'text',
  },
};

export const NoIcon: Story = {
  args: {
    icon: undefined,
    placeholder: 'Input without icon',
    type: 'text',
  },
};

export const Disabled: Story = {
  args: {
    icon: <Key />, // Show icon in disabled state too
    disabled: true,
    placeholder: 'Disabled input',
    type: 'text',
  },
};

// Rename Password story to APIKey for clarity
export const APIKey: Story = {
  args: {
    icon: <Key />, // Add icon prop here too
    iconPosition: 'left',
    type: 'password',
    placeholder: 'Paste API key...',
  },
}; 