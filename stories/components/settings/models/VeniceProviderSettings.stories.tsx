import type { Meta, StoryObj } from '@storybook/react';
import { VeniceProviderSettings } from '../../../../src/components/settings/models/VeniceProviderSettings';

const meta = {
  title: 'Components/Settings/Models/VeniceProviderSettings',
  component: VeniceProviderSettings,
  parameters: {
    layout: 'centered',
    notes: 'Placeholder settings component for Venice AI.',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    // Add argTypes for real props when implemented
  },
  args: {
    className: 'max-w-lg mx-auto', 
    // Add default args for real props when implemented
  },
} satisfies Meta<typeof VeniceProviderSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 