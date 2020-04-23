import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@sinoui/theme';
import 'jest-styled-components';
import InkBar from '../InkBar';

it('正确渲染InkBar', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <InkBar />
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
