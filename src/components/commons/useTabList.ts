import { useEffect, useState, useRef, useCallback, useMemo } from 'react';

/**
 * 标签页列表状态管理
 */
function useTabList(selectedIndex: number) {
  const [renderCount, setRenderCount] = useState(1);
  const isRenderredRef = useRef(false);
  const tabsRef = useRef<string[]>([]);
  const sortedTabsRef = useRef<string[]>([]);
  sortedTabsRef.current = [];
  isRenderredRef.current = false;
  const [tabsCount, setTabsCount] = useState(0);

  useEffect(() => {
    isRenderredRef.current = true;
  });

  /**
   * 注册标签页
   */
  const register = useCallback((tabId: string) => {
    const sortedTabs = sortedTabsRef.current;
    const currentIdx = sortedTabs.indexOf(tabId);
    if (isRenderredRef.current && currentIdx === -1) {
      setRenderCount((state) => state + 1);
      return -1;
    }

    const isAdded = tabsRef.current.indexOf(tabId) !== -1;

    if (!isAdded) {
      tabsRef.current.push(tabId);
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
    }

    if (idx !== -1) {
      sortedTabs.splice(idx, 1);

      setRenderCount((state) => state + 1);
    }
  }, []);

  return useMemo(
    () => ({
      register,
      unregister,
      selectedIndex,
      renderCount,
      tabsCount,
      setTabsCount,
    }),
    [register, renderCount, selectedIndex, tabsCount, unregister],
  );
}

export default useTabList;
