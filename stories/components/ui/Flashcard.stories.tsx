import type { Meta, StoryObj } from '@storybook/react';
import { Flashcard as FlashcardType } from '../../../src/types/db'; // Corrected path
// Assuming your Flashcard component is exported from here:
import { Flashcard } from '../../../src/components/ui/flashcard'; // Corrected path
// Remove State import
// import { State } from '../../../src/types/fsrs'; // Example path, adjust based on your project

// Mock Flashcard component if the actual one doesn't exist yet
// const Flashcard = ({ front, back }: Pick<FlashcardType, 'front' | 'back'>) => (
//   <div className="dark border border-border rounded-lg p-4 w-48 h-64 flex flex-col gap-2 bg-card text-card-foreground shadow-md">
//     <div className="font-semibold text-lg break-words">{front}</div>
//     <hr className="border-border my-1" />
//     <div className="font-medium break-words">{back}</div>
//   </div>
// );

const meta = {
  title: 'UI/Flashcard',
  component: Flashcard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Keep only relevant display props
    front: { control: 'text' },
    back: { control: 'text' },
    // Remove argTypes for props not accepted by the simplified component
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Flashcard>;

export default meta;
// Use Pick to define Story type based on relevant props only
type Story = StoryObj<Pick<FlashcardType, 'front' | 'back'>>;

// Basic English -> English Card
export const Default: Story = {
  args: {
    // Only include props relevant for display
    front: 'Ephemeral',
    back: 'Lasting for a very short time.',
  },
};

// Language Learning Card (Mandarin -> English)
export const LanguageLearning: Story = {
  args: {
    // Only include props relevant for display
    front: '你好',
    back: 'Hello',
  },
};

// --- Optional: Add other variations as needed ---

// Example: Cloze Deletion Card (if your component supports it)
// export const Cloze: Story = {
//   args: {
//     id: 3,
//     type: 'cloze',
//     cloze_text: 'The {c1::capital} of France is {c2::Paris}.',
//     // ... other relevant args for cloze type
//     created_at: new Date().toISOString(),
//     due: new Date().toISOString(),
//     stability: 1,
//     difficulty: 5,
//     elapsed_days: 0,
//     scheduled_days: 0,
//     reps: 0,
//     lapses: 0,
//     state: 'New',
//   },
// }; 