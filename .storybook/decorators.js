import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/global-styles'
import { theme } from '../components/theme';

const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];

export default decorators;
