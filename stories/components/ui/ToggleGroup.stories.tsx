import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ToggleGroup, ToggleGroupItem } from '../../../src/components/ui/toggle-group'; // Adjust path as needed
// import { toggleVariants } from '../../../src/components/ui/toggle'; // No longer needed
import { cn } from "../../../lib/utils"; // Explicitly set the correct path
// We might need icons later
// import { FaReact } from 'react-icons/fa';

// Simple Spinner Component for Story
const Spinner = () => (
  <svg className="animate-spin h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

// Updated StatusIndicator to handle checking state with spinner
const StatusIndicator = ({ status }: { status: 'checking' | 'connected' | 'error' | 'not-running' }) => (
  <div className="flex items-center justify-center ml-auto pl-3 text-xs min-w-[80px] text-right">
    {status === 'connected' && (
      <>
        <span className="text-green-500 mr-2">Detected</span> {/* Assuming i18n isn't needed directly in story */}
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full shrink-0"></div>
      </>
    )}
    {status === 'checking' && (
      <Spinner />
    )}
    {/* Hide other statuses for clarity in this story version */}
     {/* {status === 'not-running' && (<span className="text-red-500">Not Running</span>)} */}
     {/* {status === 'error' && (<span className="text-red-500">Error</span>)} */}
  </div>
);

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
    // Add a story-specific arg to control item status for demo
    itemStatus: {
      control: 'select',
      options: ['checking', 'connected', 'not-running', 'error'],
      description: 'Simulated status for all items in the story',
    }
    // className: { control: 'text' }, // Optional: control className via Storybook
  },
  args: {
    type: 'single',
    onValueChange: fn(),
    // Set width for the group, ensure vertical layout
    className: 'flex-col w-96', // Example width, adjust as needed
    orientation: 'vertical',
    itemStatus: 'checking', // Default to checking for the main story view
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Remove PlaceholderIcon component
// const PlaceholderIcon = () => <div className="w-6 h-6 bg-gray-400 rounded mr-3 shrink-0"></div>;

const localProviders = [
    { id: 'ollama', name: 'Ollama', logo: '/images/ollama.png' },
    { id: 'lmstudio', name: 'LMStudio', logo: '/images/lmstudio.png' },
    { id: 'janai', name: 'Jan.ai', logo: '/images/jan.png' },
];

// Updated render function to use itemStatus arg and disable items
const renderGroup = (args: any) => (
  <ToggleGroup {...args} className={cn("gap-2", args.className)}> 
    {localProviders.map((provider) => {
      const status = args.itemStatus || 'checking'; // Use the arg control for status
      const isDisabled = status === 'checking' || status === 'not-running' || status === 'error' || args.disabled;
      return (
        <ToggleGroupItem
          key={provider.id}
          value={provider.id}
          aria-label={`Select ${provider.name}`}
          disabled={isDisabled} // Disable based on status or global disable
          className={cn(
            "flex items-center justify-start w-full p-4 h-auto rounded-md border-2 border-transparent",
            "bg-muted hover:bg-muted/90 text-foreground text-base",
            "data-[state=on]:border-blue-500",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            isDisabled && "opacity-50 cursor-not-allowed" // Style disabled state
          )}
        >
          <img src={provider.logo} alt={`${provider.name} logo`} className="w-10 h-10 rounded mr-4 shrink-0 object-contain" />
          <span className="flex-grow text-left font-medium">{provider.name}</span>
          <StatusIndicator status={status} />
        </ToggleGroupItem>
      );
    })}
  </ToggleGroup>
);

export const DefaultChecking: Story = {
  name: "Default (Checking)", // Rename story for clarity
  render: renderGroup,
  args: {
    type: 'single',
    itemStatus: 'checking', // Explicitly set checking state
  },
};

export const ConnectedExample: Story = {
  name: "Example (Connected)",
  render: renderGroup,
  args: {
     type: 'single',
     itemStatus: 'connected', // Show connected state
  }
};

// Remove other stories for now, or adapt them if needed
// export const Multiple: Story = { ... };
// export const Outline: Story = { ... };
// export const Small: Story = { ... };
// export const Vertical: Story = { ... };
// export const Disabled: Story = { ... }; 