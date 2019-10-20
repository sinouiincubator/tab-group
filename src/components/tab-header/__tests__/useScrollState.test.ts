/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from '@testing-library/react-hooks';
import { useRef } from 'react';
import useScrollState from '../useScrollState';
import mockTabListContext from '../../commons/__tests__/mockTabListContext';
import animate from '../../../helpers/animate';

jest.mock('../../../helpers/animate');

(animate as jest.Mock).mockImplementation(
  (
    _start: number,
    end: number,
    _duration: number,
    callback: (value: number) => void,
  ) => {
    callback(end);
  },
);

jest.useFakeTimers();

it('容器宽度小于滚动宽度，出现滚动条', () => {
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    scrollLeft: 0,
  };
  const tabList = mockTabListContext();

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef, tabList);
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

  const tabList = mockTabListContext();

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef, tabList);
  });

  expect(result.current.showScrollButtons).toBe(false);
});

it('滚动位置不为0，则向左滚动按钮可用', () => {
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    scrollLeft: 20,
  };
  const tabList = mockTabListContext();

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef, tabList);
  });

  expect(result.current.isPrevDisabled).toBe(false);
});

it('滚动位置在最右侧，则向右滚动按钮不可用', () => {
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    scrollLeft: 50,
  };
  const tabList = mockTabListContext();

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef, tabList);
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
  const tabList = mockTabListContext();

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef, tabList);
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
  const tabList = mockTabListContext();

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef, tabList);
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
  const tabList = mockTabListContext();

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef, tabList);
  });

  act(() => {
    result.current.next();
    result.current.onTabListScroll();
    jest.runAllTimers();
  });

  expect(result.current.isPrevDisabled).toBe(false);
  expect(result.current.isNextDisabled).toBe(true);
});

describe('scrollSelectedTabIntoView', () => {
  const { querySelector } = document;
  beforeEach(() => {
    document.querySelector = jest.fn();
  });

  afterEach(() => {
    document.querySelector = querySelector;
  });

  it('初始时，将当前选中的标签滚动到视口', () => {
    let scrollLeft = 0;
    const tabRect = { left: 1000, right: 1100 };
    const mockTabList = {
      clientWidth: 100,
      scrollWidth: 1500,
      get scrollLeft() {
        return scrollLeft;
      },
      set scrollLeft(_scrollLeft: number) {
        scrollLeft = Math.max(0, Math.min(1400, _scrollLeft));
        tabRect.left -= _scrollLeft;
        tabRect.right -= _scrollLeft;
      },
      getBoundingClientRect: () => ({ left: 0, right: 100 }),
    };
    const tabMock = {
      getBoundingClientRect: () => tabRect,
    };
    (document.querySelector as jest.Mock).mockReturnValue(tabMock);
    const tabList = mockTabListContext();

    renderHook(() => {
      const tabListRef = useRef<any>(mockTabList);
      return useScrollState(tabListRef, tabList);
    });

    expect(scrollLeft).toBe(1000);
  });

  it('切换标签时，同步滚动位置，将当前标签出现在视口', () => {
    let scrollLeft = 0;
    const tabRect = { left: 0, right: 100 };
    const mockTabList = {
      clientWidth: 100,
      scrollWidth: 1500,
      get scrollLeft() {
        return scrollLeft;
      },
      set scrollLeft(_scrollLeft: number) {
        scrollLeft = Math.max(0, Math.min(1400, _scrollLeft));
        tabRect.left -= _scrollLeft;
        tabRect.right -= _scrollLeft;
      },
      getBoundingClientRect: () => ({ left: 0, right: 100 }),
    };
    const tabMock = {
      getBoundingClientRect: () => tabRect,
    };
    (document.querySelector as jest.Mock).mockReturnValue(tabMock);
    const tabList = mockTabListContext();

    const { rerender } = renderHook(() => {
      const tabListRef = useRef<any>(mockTabList);
      return useScrollState(tabListRef, tabList);
    });

    tabList.selectedIndex = 1;
    tabRect.right = 1100;

    act(() => rerender());

    expect(scrollLeft).toBe(1000);
  });
});

it('监听窗口大小变化，更新滚动按钮状态', () => {
  const mockTabList = {
    clientWidth: 100,
    scrollWidth: 150,
    scrollLeft: 0,
  };
  const tabList = mockTabListContext();

  const { result } = renderHook(() => {
    const tabListRef = useRef<any>(mockTabList);
    return useScrollState(tabListRef, tabList);
  });

  mockTabList.clientWidth = 200;

  act(() => {
    window.dispatchEvent(new Event('resize'));
    jest.runAllTimers();
  });

  expect(result.current.showScrollButtons).toBe(false);
});
