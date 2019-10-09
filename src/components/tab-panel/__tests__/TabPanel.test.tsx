import { render, cleanup } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TabPanel from '../TabPanel';
import TabContentContext from '../../TabContentContext';

afterEach(cleanup);

it('如果id不等于active，则不渲染', () => {
  const { getByTestId } = render(
    <TabContentContext.Provider value={{ active: 0 }}>
      <TabPanel id={1} data-testid="tabpanel">
        内容一
      </TabPanel>
    </TabContentContext.Provider>,
  );

  const panel = getByTestId('tabpanel');

  expect(panel).not.toHaveTextContent('内容一');
});

it('如果id等于active，则渲染', () => {
  const { getByTestId } = render(
    <TabContentContext.Provider value={{ active: 1 }}>
      <TabPanel id={1} data-testid="tabpanel">
        内容一
      </TabPanel>
    </TabContentContext.Provider>,
  );

  const panel = getByTestId('tabpanel');

  expect(panel).toHaveTextContent('内容一');
  expect(panel).toHaveClass('sinoui-tab-panel-active');
});

it('id等于active之后，active又变换成不是id，不销毁', () => {
  const { getByTestId, rerender } = render(
    <TabContentContext.Provider value={{ active: 1 }}>
      <TabPanel id={1} data-testid="tabpanel">
        内容一
      </TabPanel>
    </TabContentContext.Provider>,
  );

  rerender(
    <TabContentContext.Provider value={{ active: 0 }}>
      <TabPanel id={1} data-testid="tabpanel">
        内容一
      </TabPanel>
    </TabContentContext.Provider>,
  );

  const panel = getByTestId('tabpanel');

  expect(panel).toHaveTextContent('内容一');
  expect(panel).toHaveClass('sinoui-tab-panel-hidden');
});
