import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ToggleGroup, ToggleGroupItem } from '../../../src/components/ui/toggle-group'; // Adjust path as needed
import { toggleVariants } from '../../../src/components/ui/toggle'; // Import variants for argTypes

const meta = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  subcomponents: { ToggleGroupItem }, // Include subcomponent documentation
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'], // Manually list options from toggleVariants
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'], // Manually list options from toggleVariants
    },
    disabled: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    // Add argTypes for ToggleGroupItem if needed
  },
  args: {
    type: 'single',
    onValueChange: fn(),
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Render function to showcase the group
const renderGroup = (args: any) => (
  <ToggleGroup {...args}>
    <ToggleGroupItem value="a" aria-label="Toggle A">
      A
    </ToggleGroupItem>
    <ToggleGroupItem value="b" aria-label="Toggle B">
      B
    </ToggleGroupItem>
    <ToggleGroupItem value="c" aria-label="Toggle C">
      C
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Default: Story = {
  render: renderGroup,
  args: {
    type: 'single',
  },
};

export const Multiple: Story = {
  render: renderGroup,
  args: {
    type: 'multiple',
  },
};

export const Outline: Story = {
  render: renderGroup,
  args: {
    variant: 'outline',
  },
};

export const Small: Story = {
  render: renderGroup,
  args: {
    size: 'sm',
  },
};

export const Vertical: Story = {
  render: renderGroup,
  args: {
    orientation: 'vertical',
  },
};

export const Disabled: Story = {
  render: renderGroup,
  args: {
    disabled: true,
  },
}; 