import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { LocalProviderSettings } from '../../../../src/components/settings/models/LocalProviderSettings';
import type { LocalProviderConfig } from '../../../../src/hooks/useProviderStatus';
import type { UserConfig, Model } from '../../../../src/components/settings/models/types';

// --- Mock Data --- 
const mockProviders: LocalProviderConfig[] = [
  {
    id: 'ollama',
    name: 'Ollama',
    logo: '/images/logos/ollama.png',
    endpoint: 'http://localhost:11434',
    checkPath: '/api/tags',
  },
   {
    id: 'lmstudio',
    name: 'LM Studio',
    logo: '/images/logos/lmstudio.png',
    endpoint: 'http://localhost:1234', 
    checkPath: '/v1/models',
  },
   {
    id: 'jan',
    name: 'Jan',
    logo: '/images/logos/jan.png',
    endpoint: 'http://localhost:1337',
    checkPath: '/v1/models',
  },
];

const mockStatuses: Record<string, 'connected' | 'not-running' | 'error' | 'checking'> = {
    ollama: 'connected',
    lmstudio: 'not-running',
    jan: 'error',
};

const mockOllamaModels: Model[] = [
    { id: 'llama3:latest', name: 'Llama 3' },
    { id: 'mistral:latest', name: 'Mistral' },
    { id: 'codegemma:latest', name: 'CodeGemma' },
    { id: 'bge-m3:latest', name: 'BGE M3 (Embed)' },
    { id: 'nomic-embed-text:latest', name: 'Nomic Embed Text (Embed)' },
];

const mockOllamaConfig: UserConfig = {
    provider: 'ollama',
    endpoint: 'http://localhost:11434',
    chatModel: 'llama3:latest',
    embeddingModel: 'bge-m3:latest',
    htmlMarkdownModel: 'default',
};

const meta = {
  title: 'Components/Settings/Models/LocalProviderSettings',
  component: LocalProviderSettings,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    activeConfig: { control: 'object' },
    onSave: { action: 'saved' },
    isLoading: { control: 'boolean' },
    providers: { control: 'object' },
    statuses: { control: 'object' },
    availableModels: { control: 'object' },
    modelsLoading: { control: 'boolean' },
    modelsError: { control: 'text' },
  },
  args: {
    // Default args for stories
    activeConfig: mockOllamaConfig,
    onSave: fn().mockResolvedValue(undefined), // Mock async save
    isLoading: false,
    providers: mockProviders,
    statuses: mockStatuses,
    availableModels: mockOllamaModels,
    modelsLoading: false,
    modelsError: null,
    className: 'max-w-2xl mx-auto', // Add max width for better viewing
  },
} satisfies Meta<typeof LocalProviderSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { 
     // Uses default args from meta
  },
};

export const LoadingModels: Story = {
  args: {
    availableModels: [],
    modelsLoading: true,
  },
};

export const ErrorLoadingModels: Story = {
  args: {
    availableModels: [],
    modelsError: 'Connection refused. Is Ollama running?',
  },
};

export const ProviderNotRunning: Story = {
  args: {
    statuses: { ollama: 'not-running', lmstudio: 'not-running', jan: 'error' }, 
  },
};

export const NoProviderConfigured: Story = {
    args: {
        activeConfig: null, // Simulate no config saved yet
    }
}; 