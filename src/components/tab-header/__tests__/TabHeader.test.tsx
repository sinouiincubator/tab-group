/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@sinoui/theme';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TabHeader from '../TabHeader';
import TabHeaderItem from '../../tab-header-item';

afterEach(cleanup);

jest.useFakeTimers();

it('正确渲染TabHeader', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabHeader selectedIndex={0}>
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

it('附加内容', () => {
  const tree = renderer.create(
    <ThemeProvider theme={defaultTheme}>
      <TabHeader extraContent={<div>附加内容</div>} selectedIndex={0}>
        <div className="sinoui-tab-label">标签内容1</div>
        <div className="sinoui-tab-label sinoui-tab-label-active">
          标签内容2
        </div>
      </TabHeader>
    </ThemeProvider>,
  );

  expect(tree).toMatchSnapshot();
});

let clientRectFn: jest.Mock | undefined;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let getBoundingClientRect: any;
beforeEach(() => {
  clientRectFn = jest.fn();
  getBoundingClientRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = clientRectFn;
});

it('inkBar显示在正确的位置上', () => {
  clientRectFn!.mockReturnValueOnce({ width: 100, left: 180 });
  clientRectFn!.mockReturnValueOnce({ left: 20 });

  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabHeader selectedIndex={0}>
        <div className="sinoui-tab">标签内容1</div>
        <div className="sinoui-tab sinoui-tab--active">标签内容2</div>
      </TabHeader>
    </ThemeProvider>,
  );

  const inkbar = getByTestId('inkbar');

  expect(inkbar).toHaveStyle('width: 100px');
  expect(inkbar).toHaveStyle('transform: translate3d(160px, 0px, 0px)');
});

/* 验收测试 */
it('TabHeader 与 TabHeaderItem 组合使用', () => {
  clientRectFn!.mockReturnValue({ width: 100, left: 180 });

  const Demo = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <ThemeProvider theme={defaultTheme}>
        <TabHeader selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
          <TabHeaderItem title="标签1" />
          <TabHeaderItem title="标签2" />
        </TabHeader>
      </ThemeProvider>
    );
  };

  const { getByTestId } = render(<Demo />);

  expect(getByTestId('tab-header-item-0')).toHaveClass('sinoui-tab--active');

  act(() => {
    fireEvent.click(getByTestId('tab-header-item-1'));
  });

  expect(getByTestId('tab-header-item-1')).toHaveClass('sinoui-tab--active');
});

it('全宽模式', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabHeader selectedIndex={0} fullWidth>
          <TabHeaderItem title="标签1" />
          <TabHeaderItem title="标签2" />
        </TabHeader>
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
