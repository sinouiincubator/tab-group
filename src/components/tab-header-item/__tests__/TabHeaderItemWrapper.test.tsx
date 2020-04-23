import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@sinoui/theme';
import 'jest-styled-components';
import TabHeaderItemWrapper from '../TabHeaderItemWrapper';

it('正确渲染TabHeaderItemWrapper', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabHeaderItemWrapper />
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('选中状态下的TabTabHeaderItemWrapper', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabHeaderItemWrapper active />
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('不可用状态下的TabHeaderItemWrapper', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabHeaderItemWrapper disabled />
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('不可用且选中状态下的TabHeaderItemWrapper', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabHeaderItemWrapper disabled active />
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
