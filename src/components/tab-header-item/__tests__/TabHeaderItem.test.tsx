import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import React from 'react';
import useTabList from 'src/components/commons/useTabList';
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
          <TabHeaderItem title="标签1" data-testid="tab" />
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
          <TabHeaderItem title="标签1" data-testid="tab" />
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
          <TabHeaderItem title="标签1" data-testid="tab" disabled />
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
    <TabHeaderItem title="标签1" data-testid="tab" disabled />,
  );

  expect(container).toBeEmpty();
});

it('方向键切换标签页', () => {
  const context = {
    onSelect: jest.fn(),
  };
  function Demo() {
    const tabListContext = useTabList(0);

    return (
      <ThemeProvider theme={defaultTheme}>
        <TabListContext.Provider value={tabListContext}>
          <TabHeaderContext.Provider value={context}>
            <TabHeaderItem title="标签1" data-testid="tab1" />
            <TabHeaderItem title="标签1" data-testid="tab2" disabled />
            <TabHeaderItem title="标签1" data-testid="tab3" />
          </TabHeaderContext.Provider>
        </TabListContext.Provider>
      </ThemeProvider>
    );
  }

  const { getByTestId } = render(<Demo />);
  act(() => {
    fireEvent.click(getByTestId('tab1'));
  });
  fireEvent.keyDown(getByTestId('tab1'), { keyCode: 37 });

  expect(context.onSelect).toHaveBeenCalledTimes(2);

  fireEvent.keyDown(getByTestId('tab1'), { keyCode: 50 });

  expect(context.onSelect).toHaveBeenCalledTimes(2);

  fireEvent.keyDown(getByTestId('tab2'), { keyCode: 39 });

  expect(context.onSelect).toHaveBeenCalledTimes(2);
});
