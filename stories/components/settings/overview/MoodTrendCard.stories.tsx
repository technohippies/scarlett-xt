import type { Meta, StoryObj } from '@storybook/react';
import { MoodTrendCard, type MoodEntry } from '../../../../src/components/settings/overview/MoodTrendCard';

// Helper to generate mock mood data
const createMoodData = (values: number[]): MoodEntry[] => {
  const today = new Date();
  return values.map((value, index) => ({
    date: new Date(today.setDate(today.getDate() - (values.length - 1 - index))).toISOString().split('T')[0],
    value: value as MoodEntry['value'], // Ensure value is within 1-5
  }));
};

const meta = {
  title: 'Components/Settings/Overview/MoodTrendCard',
  component: MoodTrendCard,
  parameters: {
    layout: 'centered',
    notes: 'Displays a trend summary based on recent mood history.',
  },
  tags: ['autodocs'],
  argTypes: {
    moodHistory: {
      control: 'object',
      description: 'Array of recent mood entries ({ date: string, value: 1-5 }).',
    },
    className: { control: 'text' },
  },
  args: {
    className: 'w-48', // Give it a width for the story
  },
} satisfies Meta<typeof MoodTrendCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrendingUp: Story = {
  args: {
    moodHistory: createMoodData([1, 2, 2, 3, 4, 4, 5]),
  },
};

export const TrendingDown: Story = {
  args: {
    moodHistory: createMoodData([5, 4, 4, 3, 3, 2, 1]),
  },
};

export const Stable: Story = {
  args: {
    moodHistory: createMoodData([3, 4, 3, 4, 3, 4, 3]),
  },
};

export const InsufficientData: Story = {
  args: {
    moodHistory: createMoodData([4]), // Only one entry
  },
};

export const NoData: Story = {
  args: {
    moodHistory: [], // Empty array
  },
}; 