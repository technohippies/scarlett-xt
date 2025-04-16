import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, CaretDown, CaretUp } from "@phosphor-icons/react";

import { cn } from "../../../lib/utils"; // Adjust path if needed
import {
  Select,
  SelectContent,
  SelectGroup, // Add SelectGroup if needed for labeling
  SelectItem,
  SelectLabel, // Add SelectLabel if needed
  SelectTrigger,
  SelectValue,
  SelectScrollUpButton,
  SelectScrollDownButton
} from "../../../src/components/ui/select"; // Adjust path

const meta = {
  title: 'UI/Select',
  component: Select,
  subcomponents: { 
    SelectTrigger, 
    SelectValue, 
    SelectContent, 
    SelectItem, 
    SelectLabel, 
    SelectGroup, 
    SelectScrollUpButton, 
    SelectScrollDownButton 
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    // Add other relevant Radix props if needed
  },
  args: {
    onValueChange: fn(),
    disabled: false,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example model data for the story
const exampleModels = [
  { id: "google/gemma-3-27b-it", name: "Google: Gemma 3 27B (Preferred)" },
  { id: "ollama/llama3:latest", name: "Ollama: Llama 3 Latest" },
  { id: "ollama/mistral:latest", name: "Ollama: Mistral Latest" },
  { id: "openrouter/qwen/qwq-32b", name: "OpenRouter: Qwen QwQ 32B" },
  { id: "openrouter/google/gemini-2-flash-experimental", name: "OpenRouter: Gemini 2.0 Flash Experimental" },
  { id: "long/model/name/that/might/be/quite/long/and/needs/truncation/or/wrapping", name: "Very Long Model Name Example That Needs Handling" },
  { id: "model1", name: "Model 1" },
  { id: "model2", name: "Model 2" },
  { id: "model3", name: "Model 3" },
  { id: "model4", name: "Model 4" },
  { id: "model5", name: "Model 5" },
  { id: "model6", name: "Model 6" },
  { id: "model7", name: "Model 7" },
  { id: "model8", name: "Model 8" },
  { id: "model9", name: "Model 9" },
  { id: "model10", name: "Model 10" },
];

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a model" />
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-primary cursor-default">
           <CaretUp className="h-4 w-4" />
        </SelectScrollUpButton>
        <SelectGroup>
          <SelectLabel>Models</SelectLabel>
          {exampleModels.map(model => (
            <SelectItem key={model.id} value={model.id}>
              {model.name}
            </SelectItem>
          ))}
        </SelectGroup>
         <SelectScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-primary cursor-default">
           <CaretDown className="h-4 w-4" />
         </SelectScrollDownButton>
      </SelectContent>
    </Select>
  ),
  args: {
    // Default args for this story
  },
};

export const Disabled: Story = {
   render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a model" />
      </SelectTrigger>
      <SelectContent>
         {/* Content doesn't matter much when disabled */}
         <SelectItem value="disabled-example">Disabled Example</SelectItem>
      </SelectContent>
    </Select>
  ),
  args: {
    disabled: true,
  },
}; 