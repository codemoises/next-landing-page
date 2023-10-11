import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles'
import { theme } from '../src/styles/theme';

const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];

export default decorators;
