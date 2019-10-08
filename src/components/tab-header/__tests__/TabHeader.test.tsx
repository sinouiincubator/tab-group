/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import TabHeader from '../TabHeader';

afterEach(cleanup);

jest.useFakeTimers();

it('正确渲染TabHeader', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabHeader value="0">
          <div className="sinoui-tab-label">标签内容1</div>
          <div className="sinoui-tab-label sinoui-tab-label-active">
            标签内容2
          </div>
        </TabHeader>
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

let clientRectFn: jest.Mock | undefined;
beforeEach(() => {
  clientRectFn = jest.fn();
  Element.prototype.getBoundingClientRect = clientRectFn;
});

it('inkBar显示在正确的位置上', () => {
  clientRectFn!.mockReturnValueOnce({ width: 100, left: 180 });
  clientRectFn!.mockReturnValueOnce({ left: 20 });

  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabHeader value="0">
        <div className="sinoui-tab-label">标签内容1</div>
        <div className="sinoui-tab-label sinoui-tab-label-active">
          标签内容2
        </div>
      </TabHeader>
    </ThemeProvider>,
  );

  const inkbar = getByTestId('inkbar');

  expect(inkbar).toHaveStyle('width: 100px');
  expect(inkbar).toHaveStyle('transform: translate3d(160px, 0px, 0px)');
});
