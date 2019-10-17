import { render, cleanup } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TabPanel from '../TabPanel';
import TabListContext from '../../TabListContext';

afterEach(cleanup);

it('标签页不是当前标签页，则不渲染标签页内容', () => {
  const register = jest.fn();
  const unregister = jest.fn();

  register.mockReturnValue(1);

  const { getByTestId } = render(
    <TabListContext.Provider value={{ selectedIndex: 0, register, unregister }}>
      <TabPanel data-testid="tabpanel">内容一</TabPanel>
    </TabListContext.Provider>,
  );

  const panel = getByTestId('tabpanel');

  expect(panel).not.toHaveTextContent('内容一');
});

it('标签页是当前标签页，则渲染标签页内容', () => {
  const register = jest.fn();
  const unregister = jest.fn();

  register.mockReturnValue(1);

  const { getByTestId } = render(
    <TabListContext.Provider value={{ selectedIndex: 1, register, unregister }}>
      <TabPanel data-testid="tabpanel">内容一</TabPanel>
    </TabListContext.Provider>,
  );

  const panel = getByTestId('tabpanel');

  expect(panel).toHaveTextContent('内容一');
  expect(panel).toHaveClass('sinoui-tab-panel-active');
});

it('当前标签页切换后，已渲染的标签页内容不销毁', () => {
  const register = jest.fn();
  const unregister = jest.fn();

  register.mockReturnValue(1);

  const { getByTestId, rerender } = render(
    <TabListContext.Provider value={{ selectedIndex: 1, register, unregister }}>
      <TabPanel data-testid="tabpanel">内容一</TabPanel>
    </TabListContext.Provider>,
  );

  rerender(
    <TabListContext.Provider value={{ selectedIndex: 0, register, unregister }}>
      <TabPanel data-testid="tabpanel">内容一</TabPanel>
    </TabListContext.Provider>,
  );

  const panel = getByTestId('tabpanel');

  expect(panel).toHaveTextContent('内容一');
  expect(panel).toHaveClass('sinoui-tab-panel-hidden');
});

it('立即渲染标签内容', () => {
  const register = jest.fn();
  const unregister = jest.fn();

  register.mockReturnValue(1);

  const { container } = render(
    <TabListContext.Provider value={{ selectedIndex: 0, register, unregister }}>
      <TabPanel data-testid="tabpanel" forceRenderContent>
        内容一
      </TabPanel>
    </TabListContext.Provider>,
  );

  expect(container).toHaveTextContent('内容一');
});
