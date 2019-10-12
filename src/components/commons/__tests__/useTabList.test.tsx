import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import TabListContext from '../../TabListContext';
import useTabList from '../useTabList';
import useTabRegister from '../useTabRegister';

let wrapperRenderCount = 0;
const Wrapper: React.SFC = ({ children }) => {
  const context = useTabList(0);

  const { renderCount } = context;
  wrapperRenderCount = renderCount;
  return (
    <TabListContext.Provider value={context}>
      {children}
    </TabListContext.Provider>
  );
};

let tabs: number[] = [];
const Tab: React.SFC = () => {
  const index = useTabRegister();

  tabs.push(index);

  return null;
};

let updateHidden: ((hidden: boolean) => void) | null = null;
const Hidden: React.SFC<{ defaultHidden?: boolean }> = ({
  defaultHidden = true,
  children,
}) => {
  const [hidden, setHidden] = useState(defaultHidden);
  updateHidden = setHidden;

  return <>{!hidden && children}</>;
};

afterEach(() => {
  wrapperRenderCount = 0;
  tabs = [];
  updateHidden = null;
});

it('组件初始化时注册标签，返回标签索引位置', () => {
  render(
    <Wrapper>
      <Tab key={0} />
      <Tab key={1} />
    </Wrapper>,
  );

  expect(tabs).toEqual([0, 1]);
  expect(wrapperRenderCount).toBe(1);
});

it('重绘组件时，依然能够获取到正确的索引位置', () => {
  const { rerender } = render(
    <Wrapper>
      <Tab key={0} />
      <Tab key={1} />
    </Wrapper>,
  );

  tabs = [];

  act(() => {
    rerender(
      <Wrapper>
        <Tab key={0} />
        <Tab key={1} />
      </Wrapper>,
    );
  });

  expect(tabs).toEqual([0, 1]);
  expect(wrapperRenderCount).toBe(1);
});

it('自顶向下的改变标签顺序，各标签页能够获取到正确的索引位置', () => {
  const tabsIdAndIndex: { [tabId: string]: number } = {};
  const TabWithId: React.SFC<{ id: string }> = ({ id }) => {
    const index = useTabRegister();

    tabsIdAndIndex[id] = index;

    return null;
  };

  const { rerender } = render(
    <Wrapper>
      <TabWithId key={0} id="0" />
      <TabWithId key={1} id="1" />
    </Wrapper>,
  );

  act(() => {
    rerender(
      <Wrapper>
        <TabWithId key={1} id="1" />
        <TabWithId key={0} id="0" />
      </Wrapper>,
    );
  });

  expect(tabsIdAndIndex['0']).toEqual(1);
  expect(tabsIdAndIndex['1']).toEqual(0);
  expect(wrapperRenderCount).toBe(1);
});

it('自顶向下的新增标签页，各标签页能够获取到正确的索引位置', () => {
  const { rerender } = render(
    <Wrapper>
      <Tab key={0} />
      <Tab key={1} />
    </Wrapper>,
  );

  tabs = [];

  act(() => {
    rerender(
      <Wrapper>
        <Tab key={0} />
        <Tab key={1} />
        <Tab key={2} />
        <Tab key={3} />
      </Wrapper>,
    );
  });

  expect(tabs).toEqual([0, 1, 2, 3]);
  expect(wrapperRenderCount).toBe(1);
});

it('自定向下的删除标签页，各标签页能够获取到正确的索引位置', () => {
  const { rerender } = render(
    <Wrapper>
      <Tab key={0} />
      <Tab key={1} />
      <Tab key={2} />
      <Tab key={3} />
    </Wrapper>,
  );

  tabs = [];

  act(() => {
    rerender(
      <Wrapper>
        <Tab key={0} />
        <Tab key={1} />
      </Wrapper>,
    );
  });

  expect(tabs).toEqual([0, 1]);
  expect(wrapperRenderCount).toBe(1);
});

it('不引起Wrapper重绘的情况下新增了标签页，会引起Wrapper重绘，并且各标签页能够获取到正确索引位置', () => {
  let testTabIndex = 0;
  const TestTab = () => {
    testTabIndex = useTabRegister();
    if (testTabIndex !== -1) {
      tabs.push(testTabIndex);
    }

    return null;
  };
  render(
    <Wrapper>
      <Tab key={0} />
      <Tab key={1} />
      <Hidden>
        <TestTab key={2} />
      </Hidden>
      <Tab key={3} />
    </Wrapper>,
  );

  tabs = [];

  act(() => {
    if (updateHidden) {
      updateHidden(false);
    }
  });

  expect(testTabIndex).toBe(2);
  expect(tabs).toEqual([0, 1, 2, 3]);
  expect(wrapperRenderCount).toBe(2);
});

it('不引起Wrapper重绘的情况下删除标签页，会引起Wrapper重绘，并且各标签页能够获取到正确索引位置', () => {
  render(
    <Wrapper>
      <Tab key={0} />
      <Tab key={1} />
      <Hidden defaultHidden={false}>
        <Tab key={2} />
      </Hidden>
      <Tab key={3} />
    </Wrapper>,
  );

  tabs = [];

  act(() => {
    if (updateHidden) {
      updateHidden(true);
    }
  });

  expect(tabs).toEqual([0, 1, 2]);
  expect(wrapperRenderCount).toBe(2);
});
