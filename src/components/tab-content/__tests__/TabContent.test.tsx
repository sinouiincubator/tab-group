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

  expect(tabContent).toBeInTheDOM();
  expect(tabContent).toHaveStyle('transform: translate3d(-100%, 0px, 0px);');
});

/* 镜像测试 */

describe('TabContent 镜像测试', () => {
  it('渲染 TabContent', () => {
    const tree = renderer
      .create(<TabContent selectedIndex={1}>内容</TabContent>)
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

    expect(getByTestId('tab-panel-1')).toHaveClass('sinoui-tab-panel-active');
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

    expect(getByTestId('tab-panel-2')).toHaveClass('sinoui-tab-panel-active');
  });
});
