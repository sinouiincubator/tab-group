import { render, cleanup } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { act } from 'react-dom/test-utils';
import TabContent from '../TabContent';
import TabPanel from '../../tab-panel';

afterEach(cleanup);

it('渲染TabContent', () => {
  const { container } = render(<TabContent selectedIndex={1}>内容</TabContent>);

  const tabContent = container.querySelector(
    '.sinoui-tab-panel-list',
  ) as HTMLElement;

  expect(tabContent).toBeInTheDocument();
  expect(tabContent).toHaveStyle('left: -100%;');
});

/* 镜像测试 */

describe('TabContent 镜像测试', () => {
  it('渲染 TabContent', () => {
    const tree = renderer
      .create(<TabContent selectedIndex={1}>内容</TabContent>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('禁止内容切换过度动画', () => {
    const tree = renderer
      .create(
        <TabContent selectedIndex={1} animateTransitions={false}>
          内容
        </TabContent>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

/* 验收测试 */
describe('TabContent + TabPanel 组合使用', () => {
  it('渲染 TabContent', () => {
    const { getByTestId } = render(
      <TabContent selectedIndex={1}>
        <TabPanel>内容1</TabPanel>
        <TabPanel>内容2</TabPanel>
        <TabPanel>内容3</TabPanel>
      </TabContent>,
    );

    expect(getByTestId('tab-panel-1')).toHaveClass('sinoui-tab-panel--active');
  });

  it('更换选中的标签页', () => {
    const { getByTestId, rerender } = render(
      <TabContent selectedIndex={1}>
        <TabPanel>内容1</TabPanel>
        <TabPanel>内容2</TabPanel>
        <TabPanel>内容3</TabPanel>
      </TabContent>,
    );

    act(() => {
      rerender(
        <TabContent selectedIndex={2}>
          <TabPanel>内容1</TabPanel>
          <TabPanel>内容2</TabPanel>
          <TabPanel>内容3</TabPanel>
        </TabContent>,
      );
    });

    expect(getByTestId('tab-panel-2')).toHaveClass('sinoui-tab-panel--active');
  });

  it('立即渲染所有标签内容', () => {
    const { container } = render(
      <TabContent selectedIndex={1} forceRenderTabPanel>
        <TabPanel>内容1</TabPanel>
        <TabPanel>内容2</TabPanel>
        <TabPanel>内容3</TabPanel>
      </TabContent>,
    );

    expect(container).toHaveTextContent('内容1');
    expect(container).toHaveTextContent('内容2');
    expect(container).toHaveTextContent('内容3');
  });

  it('不缓存标签面板内容', () => {
    const { container, rerender } = render(
      <TabContent selectedIndex={1}>
        <TabPanel>内容1</TabPanel>
        <TabPanel>内容2</TabPanel>
        <TabPanel>内容3</TabPanel>
      </TabContent>,
    );

    rerender(
      <TabContent selectedIndex={0} cacheable={false}>
        <TabPanel>内容1</TabPanel>
        <TabPanel>内容2</TabPanel>
        <TabPanel>内容3</TabPanel>
      </TabContent>,
    );

    expect(container).not.toHaveTextContent('内容2');
  });
});
