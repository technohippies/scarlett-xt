import type { Meta, StoryObj } from '@storybook/react';
import { FocusSessionCard } from '../../../../src/components/settings/overview/FocusSessionCard';

const meta = {
  title: 'Components/Settings/Overview/FocusSessionCard',
  component: FocusSessionCard,
  parameters: {
    layout: 'centered',
    notes: 'Displays focus session statistics like total time and context switches.',
  },
  tags: ['autodocs'],
  argTypes: {
    totalMinutes: {
      control: 'number',
      description: 'Total minutes spent in focus sessions.',
    },
    contextSwitches: {
      control: 'number',
      description: 'Number of context switches during focus sessions (optional).',
    },
     className: { control: 'text' },
  },
  args: {
    totalMinutes: 145,
    contextSwitches: 12,
    className: 'w-52', // Give it a width for the story
  },
} satisfies Meta<typeof FocusSessionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalMinutes: 145, // 2h 25m
    contextSwitches: 12,
  },
};

export const LessThanAnHour: Story = {
  args: {
    totalMinutes: 40,
    contextSwitches: 5,
  },
};

export const NoContextSwitches: Story = {
  args: {
    totalMinutes: 90,
    contextSwitches: undefined, // Explicitly undefined to hide the section
  },
};

export const ZeroMinutes: Story = {
  args: {
    totalMinutes: 0,
    contextSwitches: 0,
  },
}; 