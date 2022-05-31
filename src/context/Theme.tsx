import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    font: '#edf6f9',
    main: '#373737',
    secondary: '#202020',
    background: '#181818',
    action: '#f0af19',
    warning: '#dc143c;',
  },
  fonts: {
    sansSerif: `'Roboto', sans-serif`,
    serif: `'Covered By Your Grace', cursive;`,
    icon: `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    font-family: 'Material Icons';
    `,
  },
};

const Theme: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
