import type { Preview } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../coverage/.jest-test-results.json";
import "../src/styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [withTests({ results })];

export default preview;
