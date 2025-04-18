import type { Meta, StoryObj } from '@storybook/react';
import SettingsApp from '../../entrypoints/settings/SettingsApp';
import '../../src/index.css'; // Import global CSS
import { type UserConfig, type Model } from '../../src/components/settings/models/types';
import { type LocalProviderConfig, type LocalStatus } from '../../src/hooks/useProviderStatus';
import { fn } from '@storybook/test'; // Import fn for mocking functions

// Mock data simulating the return value of useSettingsManager
const mockSettingsManagerData = {
  allConfigs: {
    ollama: { provider: 'ollama', endpoint: 'http://localhost:11434', chatModel: 'llama3:latest', embeddingModel: 'bge-m3:latest', htmlMarkdownModel: 'default' },
    openrouter: { provider: 'openrouter', apiKey: 'sk-or-v1-mockkey', chatModel: 'google/gemma-3-27b-it', embeddingModel: null, htmlMarkdownModel: 'default' },
  } as Record<string, UserConfig>,
  isLoading: false,
  isSaving: false,
  saveProviderConfig: fn().mockResolvedValue(undefined), // Mock the save function
  localProviders: [
    { id: 'ollama', name: 'Ollama', logo: '/images/ollama.png', endpoint: 'http://localhost:11434', checkPath: '/api/version' },
    { id: 'lmstudio', name: 'LM Studio', logo: '/images/lmstudio.png', endpoint: 'http://localhost:1234', checkPath: '/v1/models' },
    { id: 'janai', name: 'Jan.ai', logo: '/images/jan.png', endpoint: 'http://127.0.0.1:1337', checkPath: '/v1/models' },
  ] as LocalProviderConfig[],
  localStatuses: {
    ollama: 'connected' as LocalStatus,
    lmstudio: 'not-running' as LocalStatus,
    janai: 'checking' as LocalStatus,
  },
  availableLocalModels: [
    { id: 'llama3:latest', name: 'Llama 3 Latest' },
    { id: 'bge-m3:latest', name: 'BGE M3 Latest' },
    { id: 'other-model:7b', name: 'Other Model 7B' },
  ] as Model[],
  localModelsLoading: false,
  localModelsError: null,
};

// Mock the hook directly
const mockUseSettingsManager = () => mockSettingsManagerData;

const meta = {
  title: 'Entrypoints/SettingsApp',
  component: SettingsApp,
  parameters: {
    // Use fullscreen layout to better represent the app structure
    layout: 'fullscreen', 
    // Optionally add notes about the structure
    notes: 'The main settings page application layout, integrating the navigation sidebar and section content.'
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      // Mock the useSettingsManager hook for this story
      context.hooks = {
          useSettingsManager: mockUseSettingsManager,
      };
      return <Story {...context.args} />;
    },
  ],
  // Add args/argTypes here if SettingsApp starts accepting props
  args: {},
} satisfies Meta<typeof SettingsApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 