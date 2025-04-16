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
    pageUrl: "https://example.com/page",
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
    status: "", // Default state has no status message initially
  },
};

// Updated Bookmark story
export const ReadyBookmark: Story = {
  args: {
    pageTitle: "The Matrix - Wikipedia",
    pageUrl: "https://en.wikipedia.org/wiki/The_Matrix",
    status: "", // Remove status text for ready state
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
    pageUrl: "https://en.wikipedia.org/wiki/The_Matrix",
    status: "", // Remove status text for ready state
    clipButtonText: "Create Flashcard",
    canClip: true,
    isClipping: false,
    tagsValue: "",
  },
};

// Add other states like Clipping, Success, Error if needed, ensuring they have pageUrl
export const Clipping: Story = {
  args: {
    pageTitle: "The Matrix - Wikipedia",
    pageUrl: "https://en.wikipedia.org/wiki/The_Matrix",
    status: "", // Remove status text, spinner indicates saving
    clipButtonText: "Save Bookmark", // Button text remains but is replaced by spinner
    canClip: true, // Keep canClip true to allow disabling
    isClipping: true,
    tagsValue: "film, sci-fi, action",
  },
};

// Example: Success state (might still want status text)
export const Success: Story = {
  args: {
    pageTitle: "The Matrix - Wikipedia",
    pageUrl: "https://en.wikipedia.org/wiki/The_Matrix",
    status: "Bookmark saved!", // Success message
    clipButtonText: "Save Bookmark",
    canClip: false, // Disable button after success
    isClipping: false,
    tagsValue: "film, sci-fi, action",
  },
};

// Example: Error state
export const Error: Story = {
  args: {
    pageTitle: "The Matrix - Wikipedia",
    pageUrl: "https://en.wikipedia.org/wiki/The_Matrix",
    status: "Error: Could not save bookmark.", // Error message
    clipButtonText: "Save Bookmark",
    canClip: true, // Keep enabled to allow retry?
    isClipping: false,
    tagsValue: "film, sci-fi, action",
    statusIsError: true, // Mark as error
  },
};