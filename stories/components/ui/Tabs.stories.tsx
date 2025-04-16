import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../src/components/ui/tabs'; // Adjust path as needed

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    defaultValue: { control: 'text' },
    // Add other relevant argTypes for Tabs, TabsList, TabsTrigger, TabsContent if needed
  },
  // Use `fn` to spy on args, if applicable
  // args: { onValueChange: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
  args: {
    // Default args for the Tabs component itself
  },
};

// You can add more stories here to showcase different variations or states
// Example:
// export const AnotherVariation: Story = {
//   args: {
//     ...
//   },
// }; 