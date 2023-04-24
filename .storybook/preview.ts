import type { Preview } from "@storybook/react";
import "../styles/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark-blue',
      values: [
        {
          name: 'dark-blue',
          value: '#1a2633',
        },
        {
          name: 'blue',
          value: '#5497de',
        },
        {
          name: 'light-blue',
          value: '#adcdf0',
        },
      ],
    },
  },
};

export default preview;
