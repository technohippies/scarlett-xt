import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PopupDisplay from "../src/components/presentational/PopupDisplay";

const meta = {
  title: "Extension/Popup Display",
  component: PopupDisplay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    pageTitle: "Example Page Title",
    status: "Ready.",
    isClipping: false,
    canClip: true,
    onClip: fn(),
    clipButtonText: "Clip Page",
    statusIsError: false,
    tagsValue: "",
    onTagsChange: fn(),
  },
} satisfies Meta<typeof PopupDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base story with new fields
export const Default: Story = {
  args: {
    // Inherits default args from meta
  },
};

// Updated Bookmark story
export const ReadyBookmark: Story = {
  args: {
    pageTitle: "The Matrix - Wikipedia",
    status: "Ready to save bookmark.",
    clipButtonText: "Save Bookmark",
    canClip: true,
    isClipping: false,
    tagsValue: "film, sci-fi, action",
  },
};

// You can add back other states like Flashcard, Clipping, Success, Error here
// adapting them to include the new props (pageTitle, tagsValue, etc.)

// Example: Flashcard state
export const ReadyFlashcard: Story = {
  args: {
    pageTitle: "The Matrix - Wikipedia",
    status: "Ready to create flashcard.",
    clipButtonText: "Create Flashcard",
    canClip: true,
    isClipping: false,
    tagsValue: "",
  },
};