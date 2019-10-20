import React, { useState } from 'react';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TabGroup from '../TabGroup';
import Tab from '../tab';

it('正确渲染TabGroup', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabGroup>
          <Tab title="标签页1">内容1</Tab>
          <Tab title="标签页2">内容2</Tab>
          <Tab title="标签页3">内容3</Tab>
        </TabGroup>
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('选中第二个标签页', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabGroup selectedIndex={1}>
          <Tab title="标签页1">内容1</Tab>
          <Tab title="标签页2">内容2</Tab>
          <Tab title="标签页3">内容3</Tab>
        </TabGroup>
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('点击标签页3，则显示标签页3的内容', () => {
  const Demo = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <ThemeProvider theme={defaultTheme}>
        <TabGroup
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <Tab title="标签页1">内容1</Tab>
          <Tab title="标签页2">内容2</Tab>
          <Tab title="标签页3">内容3</Tab>
        </TabGroup>
      </ThemeProvider>
    );
  };
  const { getByTestId } = render(<Demo />);

  const tabHeaderItem = getByTestId('tab-header-item-2');

  act(() => {
    fireEvent.click(tabHeaderItem);
  });

  expect(tabHeaderItem).toHaveClass('sinoui-tab-label-active');
  expect(getByTestId('tab-panel-2')).toHaveTextContent('内容3');
});

it('受控模式的标签页切换', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabGroup defaultIndex={0}>
        <Tab title="标签页1">内容1</Tab>
        <Tab title="标签页2">内容2</Tab>
        <Tab title="标签页3">内容3</Tab>
      </TabGroup>
    </ThemeProvider>,
  );

  expect(getByTestId('tab-header-item-0')).toHaveClass(
    'sinoui-tab-label-active',
  );
  expect(getByTestId('tab-panel-0')).toHaveTextContent('内容1');

  act(() => {
    fireEvent.click(getByTestId('tab-header-item-2'));
  });

  expect(getByTestId('tab-header-item-2')).toHaveClass(
    'sinoui-tab-label-active',
  );
  expect(getByTestId('tab-panel-2')).toHaveTextContent('内容3');
});

it('阻止受控组件切换标签页', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabGroup defaultIndex={0} onSelect={() => false}>
        <Tab title="标签页1">内容1</Tab>
        <Tab title="标签页2">内容2</Tab>
        <Tab title="标签页3">内容3</Tab>
      </TabGroup>
    </ThemeProvider>,
  );

  expect(getByTestId('tab-header-item-0')).toHaveClass(
    'sinoui-tab-label-active',
  );
  expect(getByTestId('tab-panel-0')).toHaveTextContent('内容1');

  act(() => {
    fireEvent.click(getByTestId('tab-header-item-2'));
  });

  expect(getByTestId('tab-header-item-0')).toHaveClass(
    'sinoui-tab-label-active',
  );
});

it('立即渲染所有标签内容', () => {
  const { container } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabGroup forceRenderTabPanel>
        <Tab title="标签页1">内容1</Tab>
        <Tab title="标签页2">内容2</Tab>
        <Tab title="标签页3">内容3</Tab>
      </TabGroup>
    </ThemeProvider>,
  );

  expect(container).toHaveTextContent('内容1');
  expect(container).toHaveTextContent('内容2');
  expect(container).toHaveTextContent('内容3');
});

it('不缓存标签内容', () => {
  const { container, rerender } = render(
    <ThemeProvider theme={defaultTheme}>
      <TabGroup selectedIndex={0}>
        <Tab title="标签页1">内容1</Tab>
        <Tab title="标签页2">内容2</Tab>
        <Tab title="标签页3">内容3</Tab>
      </TabGroup>
    </ThemeProvider>,
  );

  rerender(
    <ThemeProvider theme={defaultTheme}>
      <TabGroup cacheable={false} selectedIndex={1}>
        <Tab title="标签页1">内容1</Tab>
        <Tab title="标签页2">内容2</Tab>
        <Tab title="标签页3">内容3</Tab>
      </TabGroup>
    </ThemeProvider>,
  );

  expect(container).not.toHaveTextContent('内容1');
});

it('附加内容', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabGroup tabHeaderExtraContent={<div>附加内容</div>}>
          <Tab title="标签页1">内容1</Tab>
          <Tab title="标签页2">内容2</Tab>
          <Tab title="标签页3">内容3</Tab>
        </TabGroup>
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('不显示标签条底部线条', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <TabGroup borderless>
          <Tab title="标签页1">内容1</Tab>
          <Tab title="标签页2">内容2</Tab>
          <Tab title="标签页3">内容3</Tab>
        </TabGroup>
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
