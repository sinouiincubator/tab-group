import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import React from 'react';
import TabHeaderContext from '../../TabHeaderContext';
import TabHeaderItem from '../TabHeaderItem';
import TabListContext from '../../TabListContext';

it('选项卡是选中状态', () => {
  const context = {
    onSelect: jest.fn(),
  };
  const tabListContext = {
    selectedIndex: 0,
    register: () => 0,
    unregister: jest.fn(),
  };

  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabListContext.Provider value={tabListContext}>
        <TabHeaderContext.Provider value={context}>
          <TabHeaderItem title="标签1" data-testId="tab" />
        </TabHeaderContext.Provider>
      </TabListContext.Provider>
    </ThemeProvider>,
  );

  expect(getByTestId('tab')).toHaveClass('sinoui-tab-label-active');
  expect(getByTestId('tab')).toHaveTextContent('标签1');
});

it('点击标签时，调用 onChange 方法', () => {
  const context = {
    onSelect: jest.fn(),
  };
  const tabListContext = {
    selectedIndex: 0,
    register: () => 0,
    unregister: jest.fn(),
  };

  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabListContext.Provider value={tabListContext}>
        <TabHeaderContext.Provider value={context}>
          <TabHeaderItem title="标签1" data-testId="tab" />
        </TabHeaderContext.Provider>
      </TabListContext.Provider>
    </ThemeProvider>,
  );

  act(() => {
    fireEvent.click(getByTestId('tab'));
  });

  expect(context.onSelect).toBeCalledWith(0, expect.anything());
});

it('不可用时不能点击', () => {
  const context = {
    onSelect: jest.fn(),
  };
  const tabListContext = {
    selectedIndex: 0,
    register: () => 0,
    unregister: jest.fn(),
  };

  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabListContext.Provider value={tabListContext}>
        <TabHeaderContext.Provider value={context}>
          <TabHeaderItem title="标签1" data-testId="tab" disabled />
        </TabHeaderContext.Provider>
      </TabListContext.Provider>
    </ThemeProvider>,
  );

  act(() => {
    fireEvent.click(getByTestId('tab'));
  });

  expect(context.onSelect).not.toBeCalled();
});

it('不在TabHeader中使用，不渲染TabHeaderItem', () => {
  const { container } = render(
    <TabHeaderItem title="标签1" data-testId="tab" disabled />,
  );

  expect(container).toBeEmpty();
});