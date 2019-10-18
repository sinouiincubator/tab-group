import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { TabProps } from '../TabListContext';

/**
 * 标签页列表状态管理
 */
function useTabList(selectedIndex: number) {
  const [renderCount, setRenderCount] = useState(1); // 内部 tab 发生变化引起重绘的次数
  const isRenderredRef = useRef(false); // 是否已经同步渲染过
  const tabsRef = useRef<string[]>([]); // 所有包含标签页（无序的）
  const sortedTabsRef = useRef<string[]>([]); // 包含的有序的标签页
  const tabsPropsRef = useRef<{ [name: string]: TabProps }>({});
  sortedTabsRef.current = []; // TODO: current mode 可能会有缺陷，参见： https://github.com/facebook/react/issues/14099
  isRenderredRef.current = false; // TODO: current mode 可能会有缺陷，参见： https://github.com/facebook/react/issues/14099

  useEffect(() => {
    isRenderredRef.current = true;
  });

  /**
   * 注册标签页
   */
  const register = useCallback((tabId: string, props: TabProps) => {
    const sortedTabs = sortedTabsRef.current;
    const currentIdx = sortedTabs.indexOf(tabId);
    if (isRenderredRef.current && currentIdx === -1) {
      setRenderCount((state) => state + 1);
      return -1;
    }

    const isAdded = tabsRef.current.indexOf(tabId) !== -1;

    if (!isAdded) {
      tabsRef.current.push(tabId);
      tabsPropsRef.current[tabId] = props;
    }

    if (currentIdx !== -1) {
      return currentIdx;
    }

    const idx = sortedTabs.length;
    sortedTabs.push(tabId);

    return idx;
  }, []);

  /**
   * 取消注册标签页
   */
  const unregister = useCallback((tabId: string) => {
    const sortedTabs = sortedTabsRef.current;
    const tabs = tabsRef.current;
    const idx = sortedTabs.indexOf(tabId);

    const tabIdx = tabs.indexOf(tabId);
    if (tabIdx !== -1) {
      tabs.splice(tabIdx, 1);
      delete tabsPropsRef.current[tabId];
    }

    if (idx !== -1) {
      sortedTabs.splice(idx, 1);

      setRenderCount((state) => state + 1);
    }
  }, []);

  /**
   * 获取所有标签id
   */
  const getTabs = useCallback(() => {
    return sortedTabsRef.current;
  }, []);

  /**
   * 获取指定id的属性
   */
  const getTabProps = useCallback((tabId: string) => {
    return tabsPropsRef.current[tabId];
  }, []);

  return useMemo(
    () => ({
      register,
      unregister,
      selectedIndex,
      renderCount,
      getTabs,
      getTabProps,
    }),
    [getTabProps, getTabs, register, renderCount, selectedIndex, unregister],
  );
}

export default useTabList;
