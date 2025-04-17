import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import { FlashcardReviewer } from '../../src/components/features/FlashcardReviewer';

const meta = {
  title: 'Features/FlashcardReviewer',
  component: FlashcardReviewer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // We pass the whole card object here, could refine later if needed
    card: { control: 'object' }, 
  },
  decorators: [
    (Story) => (
      <div className="dark p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FlashcardReviewer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample card data for stories
const sampleCard = {
  front: 'Ephemeral',
  back: 'Lasting for a very short time.',
};

const sampleCardLang = {
  front: '你好 (Nǐ hǎo)',
  back: 'Hello',
};

// Story: Initial state, answer hidden
export const AnswerHidden: Story = {
  args: {
    card: sampleCard,
    // onReview: fn(), // Mock function if needed
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find the Show Answer button
    const showButton = await canvas.findByRole('button', { name: /show answer/i });
    
    // Verify initial state (only Show Answer button is visible)
    await expect(showButton).toBeInTheDocument();
    await expect(canvas.queryByRole('button', { name: /again/i })).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', { name: /good/i })).not.toBeInTheDocument();
    
    // Simulate clicking Show Answer
    await userEvent.click(showButton);
    
    // Verify state after click (Again/Good buttons are visible)
    await expect(canvas.queryByRole('button', { name: /show answer/i })).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: /again/i })).toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: /good/i })).toBeInTheDocument();
  },
};

// Story: State after clicking "Show Answer"
export const AnswerShown: Story = {
  args: {
    card: sampleCardLang, 
  },
  // Start with the component in the 'answer shown' state
  // We achieve this by simulating the click in the 'play' function
  // and letting Storybook capture the end state.
  // Alternatively, you could add an initial state prop to the component,
  // but using the play function demonstrates the interaction.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const showButton = await canvas.findByRole('button', { name: /show answer/i });
    await userEvent.click(showButton);
    // Now the component is in the desired state for this story's snapshot
  },
}; 