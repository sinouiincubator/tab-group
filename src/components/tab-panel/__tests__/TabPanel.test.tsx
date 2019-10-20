import { render, cleanup } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TabPanel from '../TabPanel';
import TabListContext from '../../TabListContext';
import mockTabListContext from '../../commons/__tests__/mockTabListContext';

afterEach(cleanup);

it('标签页不是当前标签页，则不渲染标签页内容', () => {
  const tabListContext = mockTabListContext();
  tabListContext.register.mockReturnValue(1);

  const { getByTestId } = render(
    <TabListContext.Provider value={tabListContext}>
      <TabPanel data-testid="tabpanel">内容一</TabPanel>
    </TabListContext.Provider>,
  );

  const panel = getByTestId('tabpanel');

  expect(panel).not.toHaveTextContent('内容一');
});

it('标签页是当前标签页，则渲染标签页内容', () => {
  const tabListContext = mockTabListContext(1);
  tabListContext.register.mockReturnValue(1);

  const { getByTestId } = render(
    <TabListContext.Provider value={tabListContext}>
      <TabPanel data-testid="tabpanel">内容一</TabPanel>
    </TabListContext.Provider>,
  );

  const panel = getByTestId('tabpanel');

  expect(panel).toHaveTextContent('内容一');
  expect(panel).toHaveClass('sinoui-tab-panel--active');
});

it('当前标签页切换后，已渲染的标签页内容不销毁', () => {
  const tabListContext = mockTabListContext(1);
  tabListContext.register.mockReturnValue(1);

  const { getByTestId, rerender } = render(
    <TabListContext.Provider value={tabListContext}>
      <TabPanel data-testid="tabpanel">内容一</TabPanel>
    </TabListContext.Provider>,
  );

  rerender(
    <TabListContext.Provider value={{ ...tabListContext, selectedIndex: 0 }}>
      <TabPanel data-testid="tabpanel">内容一</TabPanel>
    </TabListContext.Provider>,
  );

  const panel = getByTestId('tabpanel');

  expect(panel).toHaveTextContent('内容一');
  expect(panel).not.toHaveClass('sinoui-tab-panel--active');
});

it('立即渲染标签内容', () => {
  const tabListContext = mockTabListContext();
  tabListContext.register.mockReturnValue(1);

  const { container } = render(
    <TabListContext.Provider value={tabListContext}>
      <TabPanel data-testid="tabpanel" forceRenderContent>
        内容一
      </TabPanel>
    </TabListContext.Provider>,
  );

  expect(container).toHaveTextContent('内容一');
});

it('不缓存标签面板内容', () => {
  const tabListContext = mockTabListContext();
  tabListContext.register.mockReturnValue(0);

  const { container, rerender } = render(
    <TabListContext.Provider value={tabListContext}>
      <TabPanel data-testid="tabpanel">内容一</TabPanel>
    </TabListContext.Provider>,
  );

  expect(container).toHaveTextContent('内容一');

  rerender(
    <TabListContext.Provider value={{ ...tabListContext, selectedIndex: 1 }}>
      <TabPanel data-testid="tabpanel" cacheable={false}>
        内容一
      </TabPanel>
    </TabListContext.Provider>,
  );

  expect(container).not.toHaveTextContent('内容一');
});

it('不可见的标签面板内容不参与到重绘中', () => {
  let contentRenderCount = 0;
  const Content: React.SFC = () => {
    contentRenderCount += 1;
    return <div>123</div>;
  };

  const tabListContext = mockTabListContext();
  tabListContext.register.mockReturnValue(0);

  const { rerender } = render(
    <TabListContext.Provider value={tabListContext}>
      <TabPanel data-testid="tabpanel">
        <Content />
      </TabPanel>
    </TabListContext.Provider>,
  );

  rerender(
    <TabListContext.Provider value={{ ...tabListContext, selectedIndex: 1 }}>
      <TabPanel data-testid="tabpanel">
        <Content />
      </TabPanel>
    </TabListContext.Provider>,
  );

  expect(contentRenderCount).toBe(1);

  rerender(
    <TabListContext.Provider value={tabListContext}>
      <TabPanel data-testid="tabpanel">
        <Content />
      </TabPanel>
    </TabListContext.Provider>,
  );

  expect(contentRenderCount).toBe(2);
});
