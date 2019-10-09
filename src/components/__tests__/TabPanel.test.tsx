import { render, cleanup } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TabPanel from '../TabPanel';
import TabContent from '../TabContent';

afterEach(cleanup);

it('如果id不等于active,则不渲染', () => {
  const { container, queryByText } = render(
    <TabContent active={0}>
      <TabPanel id={1}>内容一</TabPanel>
    </TabContent>,
  );

  const panel = container.querySelector('.sinoui-tab-panel');

  expect(panel).toBeDefined();
  expect(queryByText('内容一')).toBeNull();
});
