import type { Meta, StoryObj } from '@storybook/react';
import { FlashcardCreatorPopup } from '../../src/components/popups/FlashcardCreatorPopup'; // Adjust path as needed
import React, { useState, useEffect } from 'react';
import type { Flashcard } from '../../src/types/db'; // Import the Flashcard type

const meta: Meta<typeof FlashcardCreatorPopup> = {
  title: 'Popups/FlashcardCreatorPopup',
  component: FlashcardCreatorPopup,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code', 
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectedText: { control: 'text' },
    onSaveFlashcard: { action: 'saveFlashcard' },
    onClose: { action: 'close' },
  },
  decorators: [
    (Story, context) => {
      const [props, setProps] = useState(context.args);

      useEffect(() => {
        setProps(context.args);
      }, [context.args]);

      return (
        <div style={{ width: '384px' }}>
          <Story args={props} />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const StoryWrapper: React.FC<any> = (args) => {
  const [internalArgs, setInternalArgs] = useState(args);

  return <FlashcardCreatorPopup {...internalArgs} />;
};

export const Default: Story = {
  args: {
    selectedText: 'The mitochondria is the powerhouse of the cell. It generates most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.',
    onSaveFlashcard: (data: Partial<Flashcard>) => {
        console.log('Save Flashcard requested:', data);
    },
    onClose: () => {
        console.log('Close requested');
    },
  },
};

export const Generating: Story = {
    render: (args) => {
        return <StoryWrapper {...args} />
    },
    args: {
        selectedText: 'Mitochondria produce ATP.',
        onSaveFlashcard: (data: Partial<Flashcard>) => {
            console.log('Save Flashcard requested:', data);
        },
        onClose: () => {
            console.log('Close requested');
        },
    },
};

export const EmptySelection: Story = {
    args: {
      selectedText: '',
      onSaveFlashcard: (data: Partial<Flashcard>) => {
          console.log('Save Flashcard requested:', data);
      },
      onClose: () => {
          console.log('Close requested');
      },
    },
}; 