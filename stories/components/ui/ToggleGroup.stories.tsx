import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ToggleGroup, ToggleGroupItem } from '../../../src/components/ui/toggle-group'; // Adjust path as needed
// import { toggleVariants } from '../../../src/components/ui/toggle'; // No longer needed
import { cn } from "../../../lib/utils"; // Explicitly set the correct path
// We might need icons later
// import { FaReact } from 'react-icons/fa';

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
    disabled: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    // className: { control: 'text' }, // Optional: control className via Storybook
  },
  args: {
    type: 'single',
    onValueChange: fn(),
    // Set width for the group, ensure vertical layout
    className: 'flex-col w-96', // Example width, adjust as needed
    orientation: 'vertical',
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Remove PlaceholderIcon component
// const PlaceholderIcon = () => <div className="w-6 h-6 bg-gray-400 rounded mr-3 shrink-0"></div>;

const StatusIndicator = ({ detected }: { detected?: boolean }) => (
  <div className="flex items-center ml-auto pl-3">
    {detected && (
      <>
        <span className="text-green-500 text-xs mr-2">Detected</span>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </>
    )}
  </div>
);

// Updated render function with actual images and adjusted styling
const renderGroup = (args: any) => (
  <ToggleGroup {...args} className={cn("gap-2", args.className)}> {/* Combine default args className with potential story args className */}
    <ToggleGroupItem
      value="ollama"
      aria-label="Select Ollama"
      className={cn(
        // Base styles - Use bg-muted for default background
        "flex items-center justify-start w-full p-3 h-auto rounded-md border-2 border-transparent",
        "bg-muted hover:bg-muted/90 text-foreground", // Use bg-muted, adjust hover slightly
        // Selected state (data-[state=on]) - Use explicit blue border
        "data-[state=on]:border-blue-500", // Changed from border-primary
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      )}
    >
      {/* Increased image size */}
      <img src="/images/ollama.png" alt="Ollama logo" className="w-8 h-8 rounded mr-3 shrink-0 object-contain" />
      <span className="flex-grow text-left">Ollama</span>
      <StatusIndicator detected />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="lmstudio"
      aria-label="Select LMStudio"
      className={cn(
        // Base styles - Use bg-muted for default background
        "flex items-center justify-start w-full p-3 h-auto rounded-md border-2 border-transparent",
        "bg-muted hover:bg-muted/90 text-foreground", // Use bg-muted, adjust hover slightly
        // Selected state (data-[state=on]) - Use explicit blue border
        "data-[state=on]:border-blue-500", // Changed from border-primary
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      )}
    >
      {/* Increased image size */}
      <img src="/images/lmstudio.png" alt="LMStudio logo" className="w-8 h-8 rounded mr-3 shrink-0 object-contain" />
      <span className="flex-grow text-left">LMStudio</span>
      <StatusIndicator />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="janai"
      aria-label="Select Jan.ai"
      className={cn(
        // Base styles - Use bg-muted for default background
        "flex items-center justify-start w-full p-3 h-auto rounded-md border-2 border-transparent",
        "bg-muted hover:bg-muted/90 text-foreground", // Use bg-muted, adjust hover slightly
        // Selected state (data-[state=on]) - Use explicit blue border
        "data-[state=on]:border-blue-500", // Changed from border-primary
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      )}
    >
      {/* Increased image size */}
      <img src="/images/jan.png" alt="Jan.ai logo" className="w-8 h-8 rounded mr-3 shrink-0 object-contain" />
      <span className="flex-grow text-left">Jan.ai</span>
      <StatusIndicator />
    </ToggleGroupItem>
  </ToggleGroup>
);

// Update default story args if needed
export const Default: Story = {
  render: renderGroup,
  args: {
    // Ensure type is single for this use case
    type: 'single',
    // className is now handled in the main args
  },
};

// Remove other stories for now, or adapt them if needed
// export const Multiple: Story = { ... };
// export const Outline: Story = { ... };
// export const Small: Story = { ... };
// export const Vertical: Story = { ... };
// export const Disabled: Story = { ... }; 