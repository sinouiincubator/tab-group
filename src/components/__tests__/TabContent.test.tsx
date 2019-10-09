import { render, cleanup } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TabContent from '../TabContent';

afterEach(cleanup);

it('渲染TabContent', () => {
  const { container } = render(<TabContent active={1}>内容</TabContent>);

  const tabContent = container.querySelector(
    '.sinoui-tab-content',
  ) as HTMLElement;

  expect(tabContent).toBeInTheDOM();
  expect(tabContent).toHaveStyle('transform: translate3d(-100%, 0px, 0px);');
});
