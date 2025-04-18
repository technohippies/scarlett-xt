import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { 
  SettingsNavigationSidebar, 
  type SettingsNavigationSidebarProps, 
  type SettingsSection 
} from '../../../src/components/settings/SettingsNavigationSidebar';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/Settings/SettingsNavigationSidebar',
  component: SettingsNavigationSidebar,
  parameters: {
    layout: 'centered',
    notes: 'Navigation sidebar for the main settings page.',
  },
  tags: ['autodocs'],
  argTypes: {
    activeSection: {
      control: 'select',
      options: ['models', 'bookmarks', 'flashcards', 'chat'],
      description: 'The currently active settings section',
    },
    onSectionChange: { 
      action: 'sectionChanged',
      description: 'Callback function when a section is clicked' 
    },
  },
  decorators: [
    (Story, { args }) => {
      const initialSection = args.activeSection || 'models';
      const [active, setActive] = useState<SettingsSection>(initialSection);
      
      const handleSectionChange = (section: SettingsSection) => {
        setActive(section);
        (args.onSectionChange || action('sectionChanged')(section));
      };
      
      return (
        <div style={{ height: '400px', width: '224px', border: '1px solid #ccc' }}>
          <Story args={{ ...args, activeSection: active, onSectionChange: handleSectionChange }} />
        </div>
      );
    },
  ],
  args: {
    onSectionChange: action('sectionChanged') 
  }
} satisfies Meta<SettingsNavigationSidebarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===

export const Default: Story = {
  args: {
    activeSection: 'models',
  },
};

export const BookmarksActive: Story = {
  args: {
    activeSection: 'bookmarks',
  },
};

export const FlashcardsActive: Story = {
  args: {
    activeSection: 'flashcards',
  },
};

export const ChatActive: Story = {
  args: {
    activeSection: 'chat',
  },
}; 