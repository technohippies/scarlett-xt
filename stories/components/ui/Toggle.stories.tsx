import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Toggle, toggleVariants } from '../../../src/components/ui/toggle'; // Adjust path as needed
// import { FaBeer } from 'react-icons/fa'; // Example icon removed

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'], // Manually list options
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'], // Manually list options
    },
    disabled: { control: 'boolean' },
    'aria-label': { control: 'text' },
  },
  args: {
    onPressedChange: fn(),
    'aria-label': 'Toggle button',
    // children: <FaBeer />,
    children: 'Toggle',
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithText: Story = {
  args: {
    children: 'Toggle Me',
    'aria-label': 'Toggle text',
  },
}; 