/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from '@testing-library/react-hooks';
import { useRef } from 'react';
import useScrollState from '../useScrollState';

jest.useFakeTimers();

it('容器宽度小于滚动宽度，出现滚动条', () => {
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    scrollLeft: 0,
  };

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef);
  });

  expect(result.current.showScrollButtons).toBe(true);
  expect(result.current.isPrevDisabled).toBe(true);
  expect(result.current.isNextDisabled).toBe(false);
});

it('容器宽度等于滚动宽度，则不出现滚动条', () => {
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 100,
    scrollLeft: 0,
  };

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef);
  });

  expect(result.current.showScrollButtons).toBe(false);
});

it('滚动位置不为0，则向左滚动按钮可用', () => {
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    scrollLeft: 20,
  };

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef);
  });

  expect(result.current.isPrevDisabled).toBe(false);
});

it('滚动位置在最右侧，则向右滚动按钮不可用', () => {
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    scrollLeft: 50,
  };

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef);
  });

  expect(result.current.isNextDisabled).toBe(true);
});

it('向右滚动', () => {
  let scrollLeft = 0;
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    get scrollLeft() {
      return scrollLeft;
    },
    set scrollLeft(_scrollLeft: number) {
      scrollLeft = Math.max(0, Math.min(50, _scrollLeft));
    },
  };

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef);
  });

  act(() => {
    result.current.next();
  });

  expect(scrollLeft).toBe(50);
});

it('向左滚动', () => {
  let scrollLeft = 50;
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    get scrollLeft() {
      return scrollLeft;
    },
    set scrollLeft(_scrollLeft: number) {
      scrollLeft = Math.max(0, Math.min(50, _scrollLeft));
    },
  };

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef);
  });

  act(() => {
    result.current.prev();
  });

  expect(scrollLeft).toBe(0);
});

it('发生滚动时，重新计算滚动按钮状态', () => {
  let scrollLeft = 50;
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    get scrollLeft() {
      return scrollLeft;
    },
    set scrollLeft(_scrollLeft: number) {
      scrollLeft = Math.max(0, Math.min(50, _scrollLeft));
    },
  };

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef);
  });

  act(() => {
    result.current.next();
    result.current.onTabListScroll();
    jest.runAllTimers();
  });

  expect(result.current.isPrevDisabled).toBe(false);
  expect(result.current.isNextDisabled).toBe(true);
});
