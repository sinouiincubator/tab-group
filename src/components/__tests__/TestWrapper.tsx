import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper(props: WrapperProps) {
  const { children } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <>{children}</>
    </ThemeProvider>
  );
}
