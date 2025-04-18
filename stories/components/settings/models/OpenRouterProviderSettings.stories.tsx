import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { OpenRouterProviderSettings } from '../../../../src/components/settings/models/OpenRouterProviderSettings';
import type { UserConfig, Model } from '../../../../src/components/settings/models/types';

// Mock Data
const mockOpenRouterConfig: UserConfig = {
  provider: 'openrouter',
  apiKey: 'sk-or-v1-mockkey-valid', // Example API key
  chatModel: 'google/gemma-3-27b-it', 
  embeddingModel: null,
  htmlMarkdownModel: 'default',
};

const meta = {
  title: 'Components/Settings/Models/OpenRouterProviderSettings',
  component: OpenRouterProviderSettings,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    activeConfig: { control: 'object' },
    onSave: { action: 'saved' },
    isLoading: { control: 'boolean' },
    className: { control: 'text' },
  },
  args: {
    activeConfig: mockOpenRouterConfig,
    onSave: fn().mockResolvedValue(undefined),
    isLoading: false,
    className: 'max-w-2xl mx-auto', 
  },
} satisfies Meta<typeof OpenRouterProviderSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const NoConfig: Story = {
  args: {
    activeConfig: null,
  },
};

export const MissingApiKey: Story = {
  args: {
    activeConfig: { ...mockOpenRouterConfig, apiKey: '' }, // Simulate empty API key
  },
};

export const Saving: Story = {
  args: {
    isLoading: true,
  },
}; 