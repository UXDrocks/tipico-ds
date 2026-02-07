import type { Preview } from "@storybook/react";

import "../src/index.css";
import "../src/theme.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
  },
};

export default preview;