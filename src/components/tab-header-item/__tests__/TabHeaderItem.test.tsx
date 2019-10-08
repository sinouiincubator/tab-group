import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import React from 'react';
import TabHeaderContext from '../../TabHeaderContext';
import TabHeaderItem from '../TabHeaderItem';

it('选项卡是选中状态', () => {
  const context = {
    onChange: jest.fn(),
    activeTabId: '1',
  };

  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabHeaderContext.Provider value={context}>
        <TabHeaderItem id="1" title="标签1" data-testId="tab" />
      </TabHeaderContext.Provider>
    </ThemeProvider>,
  );

  expect(getByTestId('tab')).toHaveClass('sinoui-tab-label-active');
  expect(getByTestId('tab')).toHaveTextContent('标签1');
});

it('点击标签时，调用 onChange 方法', () => {
  const context = {
    onChange: jest.fn(),
    activeTabId: '2',
  };

  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabHeaderContext.Provider value={context}>
        <TabHeaderItem id="1" title="标签1" data-testId="tab" />
      </TabHeaderContext.Provider>
    </ThemeProvider>,
  );

  act(() => {
    fireEvent.click(getByTestId('tab'));
  });

  expect(context.onChange).toBeCalled();
});

it('不可用时不能点击', () => {
  const context = {
    onChange: jest.fn(),
    activeTabId: '2',
  };

  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabHeaderContext.Provider value={context}>
        <TabHeaderItem id="1" title="标签1" data-testId="tab" disabled />
      </TabHeaderContext.Provider>
    </ThemeProvider>,
  );

  act(() => {
    fireEvent.click(getByTestId('tab'));
  });

  expect(context.onChange).not.toBeCalled();
});
