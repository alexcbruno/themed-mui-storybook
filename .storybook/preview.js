import { ThemeProvider } from '@mui/material/styles';
import { addDecorator } from '@storybook/react';
import { theme } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  anima: {
    designTokens: require("../design-tokens.json"),
  },
};

addDecorator((story) => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));
