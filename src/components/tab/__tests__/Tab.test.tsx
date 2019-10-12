import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import '@testing-library/jest-dom/extend-expect';
import Tab from '../Tab';
import TabHeader from '../../tab-header';
import TabContent from '../../tab-content';

it('在TabHeaderContext上下文中，Tab渲染出TabHeaderItem', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabHeader value={0}>
        <Tab title="标签1">内容1</Tab>
      </TabHeader>
    </ThemeProvider>,
  );

  expect(getByTestId('tab-header-item-0')).toHaveTextContent('标签1');
});

it('在TabContentContext上下文中，Tab渲染出TabPanel', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabContent selectedIndex={0}>
        <Tab title="标签1">内容1</Tab>
      </TabContent>
    </ThemeProvider>,
  );

  expect(getByTestId('tab-panel-0')).toHaveTextContent('内容1');
});

it('不在上下文中，则Tab不渲染', () => {
  const { container } = render(<Tab title="标签1">内容1</Tab>);

  expect(container).toBeEmpty();
});
