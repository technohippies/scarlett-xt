import type { Meta, StoryObj } from '@storybook/react';
import { StudyStreakCard } from '../../../../src/components/settings/overview/StudyStreakCard';

const meta = {
  title: 'Components/Settings/Overview/StudyStreakCard',
  component: StudyStreakCard,
  parameters: {
    layout: 'centered',
    notes: 'Displays the user\'s study streak for flashcards.',
  },
  tags: ['autodocs'],
  argTypes: {
    streakCount: {
      control: 'number',
      description: 'The number of consecutive days the user studied.',
    },
    className: { control: 'text' },
  },
  args: {
    streakCount: 7,
    className: 'w-48', // Give it a width for the story
  },
} satisfies Meta<typeof StudyStreakCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    streakCount: 7,
  },
};

export const LongStreak: Story = {
  args: {
    streakCount: 123,
  },
};

export const NoStreak: Story = {
  args: {
    streakCount: 0,
  },
}; 