import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Textarea } from '../../../src/components/ui/textarea'; // Adjust path as needed

const meta = {
  title: 'Components/UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'text' }, // Add value control
  },
  args: { 
    onChange: fn(), // Spy on onChange
    placeholder: 'Type something here...',
    value: '', // Default value
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    placeholder: 'Cannot type here',
    disabled: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    value: 'This is some initial text.',
    placeholder: 'Placeholder is hidden when there is value',
  },
}; 