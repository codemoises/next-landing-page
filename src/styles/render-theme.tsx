import { RenderResult, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ReactNode } from 'react';

export const renderTheme = (children: ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
