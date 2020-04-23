import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@sinoui/theme';
import 'jest-styled-components';
import TabHeaderWrapper from '../TabHeaderWrapper';

it('正确渲染TabHeaderWrapper', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabHeaderWrapper />
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('不显示底部线条', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabHeaderWrapper borderless />
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
