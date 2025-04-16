import type { Preview } from "@storybook/react";
import "../src/index.css"; // Import Tailwind/shadcn styles

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
