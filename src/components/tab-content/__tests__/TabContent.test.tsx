import { render, cleanup } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import TabContent from '../TabContent';

afterEach(cleanup);

it('渲染TabContent', () => {
  const { container } = render(<TabContent active={1}>内容</TabContent>);

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
      .create(<TabContent active={1}>内容</TabContent>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
