import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MoodSelector, Mood } from '../../src/components/MoodSelector'; // Adjust path as needed

const meta = {
  title: 'Components/MoodSelector',
  component: MoodSelector,
  parameters: {
    layout: 'centered',
    // Optional: Add notes or docs specific to this component
    notes: 'A component to select a mood using Lottie animations.',
  },
  tags: ['autodocs'],
  argTypes: {
    initialMood: {
      control: 'select',
      options: [null, 'happy', 'slightly-happy', 'neutral', 'slightly-frowning', 'sad'],
      description: 'The initially selected mood.',
      table: {
        type: { summary: 'Mood | null' },
        defaultValue: { summary: 'null' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the mood selector.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onSelect: {
      action: 'selected', // Logs the action in the Storybook Actions panel
      description: 'Callback function triggered when a mood is selected or deselected. Passes the selected mood (or null if deselected).'
    },
  },
  args: {
    // Default args for all stories unless overridden
    onSelect: fn(), // Use Storybook's spy function to mock the callback
    disabled: false,
    initialMood: null,
  },
} satisfies Meta<typeof MoodSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const Default: Story = {
  args: {
    // Uses default args from meta
  },
};

export const InitiallyHappy: Story = {
  args: {
    initialMood: 'happy',
  },
};

export const InitiallyNeutral: Story = {
  args: {
    initialMood: 'neutral',
  },
};

export const InitiallySad: Story = {
  args: {
    initialMood: 'sad',
  },
};

export const Disabled: Story = {
  args: {
    initialMood: 'slightly-happy', // Show a mood selected even when disabled
    disabled: true,
  },
};

// Optional: Story to demonstrate error state (requires manual trigger or modification)
// export const ErrorState: Story = {
//   render: (args) => {
//     // You might need to modify the component or mock the fetch to force an error
//     // This is a placeholder example
//     return (
//        <div className="flex items-center justify-center p-2 bg-red-100 text-red-700 rounded-md h-[56px]">
//          Error: Failed to load mood animations.
//       </div>
//     );
//   },
// }; 